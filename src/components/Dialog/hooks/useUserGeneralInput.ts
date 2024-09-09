import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useMessages from "../hooks/useMessages";
import { useContext } from "react";
import { AlexaContext } from "../../../App";
import useSpeechResponse from "./useSpeechResponse";
import useUserEmotionalAnalysis from "./useUserEmotionalAnalysis";
import { useSelector } from "react-redux";
import { UserDBRootState } from "../../../shared/redux/slices/userDBSlice";
import useLanguage from "../../../shared/hooks/useLanguage";

const useUserGeneralInput = () => {
  // Constants
  const INITIAL_PROMPT = (_language: string): string => {
    return `
              Contexto: quiero que actúes como un profesor de idiomas. Tu rol va a ser el de hablar con el usuario
              sobre diversos temas que tú deberás elegir como profesor. El objetivo es hacer que el usuario hable de manera
              continuada para conseguir practicar su comunicación en un determinado idioma.
              El idioma que deberás practicar con el usuario es ${_language}. 
              
              Solamente deberás utilizar texto en tu respuesta, no deberás usar emojis ni caritas ni ningún otro elemento visual.
              
              Instrucciones:
                1. Deberás ser siempre proactivo haciendo que el usuario hable.
                2. Provee variedad en las preguntas y respuestas para mantener la conversación interesante.
                3. Trata de hacer que el diálogo sea uno natural y real.
                4. Deberás devolver como respuesta texto, no emojis ni caritas ni ningún otro elemento visual.
              `;
  };

  // Global variables
  const userLanguageCode = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.language
  );

  // Custom and React Hooks
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { handleUserEmotionalAnalysis } = useUserEmotionalAnalysis();
  const { getGreetings, getLanguageObjectByCode } = useLanguage();
  const {
    getResponseToNewUserMessage,
    addSystemMessageAndUpdateTokens,
    addAssistantMessageAndUpdateTokens,
    setOpenAIMessages,
  } = useMessages();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const handleAnswerToGeneralUserInput = async (
    _userRequest: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    const artificialIntelligenceResponse = await getResponseToUserRequest(
      _userRequest,
      _messages
    );
    speechResponseToUserRequest(artificialIntelligenceResponse);
  };

  const getResponseToUserRequest = async (
    _userRequest: string,
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    let artificialIntelligenceResponse = "";
    let messagesCopy: OpenAIMessageDTO[] = [..._messages];

    handleConversationStart(messagesCopy);

    //FIXME: change userEmotion
    const userEmotion = await handleUserEmotionalAnalysis(messagesCopy);
    //const userEmotion = "";

    artificialIntelligenceResponse = await getResponseToNewUserMessage(
      _userRequest,
      messagesCopy,
      userEmotion
    );

    printDebug(
      `+++ Inside getResponseToUserRequest() 3 - messagesCopy after => ${JSON.stringify(
        messagesCopy
      )} `
    );

    setOpenAIMessages(messagesCopy);
    return artificialIntelligenceResponse;
  };

  const handleConversationStart = (_messages: OpenAIMessageDTO[]) => {
    const languageName =
      getLanguageObjectByCode(userLanguageCode)?.name || "Español";
    const greetings = getGreetings(userLanguageCode);

    if (isConversationStarting(_messages)) {
      addSystemMessageAndUpdateTokens(INITIAL_PROMPT(languageName), _messages);
    }

    addAssistantMessageAndUpdateTokens(greetings, _messages);
  };

  const isConversationStarting = (_messages: OpenAIMessageDTO[]) => {
    if (_messages.length === 0) {
      return true;
    }

    return false;
  };

  return {
    handleAnswerToGeneralUserInput,
    getResponseToUserRequest, // FOR TEST
  };
};

export default useUserGeneralInput;
