// Import React elements
import { useContext, useEffect } from "react";

// Import Contexts
import { AlexaContext } from "../../App";

import axios from "axios";
import { OpenAIMessageDTO } from "../../shared/dtos/OpenAIDTO";
import useExponentialBackoff from "../../shared/hooks/useExponentialBackoff";

// CONSTANTS
const ENDPOINT = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const useOpenAPI = () => {
  /* App Context Data */
  const { printDebug } = useContext(AlexaContext);

  /**
   * max_tokens: is the maximum number of tokens used to generate the response;
   * The max_tokens allowed for the gpt-3.5-turbo-1106 model is up to 4096 tokens.
   * The context window for the gpt-3.5-turbo-1106 model is up to 16385 tokens.
   * Setting max_tokens to 4096 tokens allows to have 12289 tokens for the messages array.
   *
   * @param _messages
   * @returns
   */
  const askGPT = async (
    _messages: OpenAIMessageDTO[],
    _maxTokens?: number
  ): Promise<string> => {
    try {
      const responseFromGPT = await useExponentialBackoff(async () => {
        return axios.post(
          ENDPOINT,
          {
            model: "gpt-3.5-turbo-1106",
            messages: _messages,
            max_tokens: _maxTokens ? _maxTokens : 4096,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
      }, printDebug);

      const responseContent = responseFromGPT.data.choices[0].message.content;
      printDebug(`+++ INSIDE askGPT => ${responseContent}`);

      if (responseContent) {
        return responseContent;
      }

      return `No sé la respuesta a esa pregunta`;
    } catch (error: any) {
      printDebug(`+++ ERROR in askGPT +++ => ${error.message}`);
      return `Lo siento, en estos momentos no puedo contestar a tu pregunta. Por favor, vuelve a intentarlo más tarde`;
    }
  };

  const getResponseObject = (_text: string) => {
    printDebug("++++ Inside getJson() - text =>" + _text);
    if (_text != null) {
      var inicioJSON = _text.indexOf("{");
      var finJSON = _text.lastIndexOf("}");
      var jsonSolo = _text.slice(inicioJSON, finJSON + 1);

      // Convertir el JSON en un objeto JavaScript
      return JSON.parse(jsonSolo);
    }
  };

  useEffect(() => {
    //askGPT("me siento solo");
  }, []);

  return { askGPT };
};

export default useOpenAPI;
