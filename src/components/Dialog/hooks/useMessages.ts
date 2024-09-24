import { useContext } from "react";
import { useDispatch } from "react-redux";
import { setMessages } from "../../../shared/redux/slices/openAISlice";
import useOpenAPI from "../../../api/open-ai/useOpenAI";
import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useContextTokensThreshold from "./useContextTokensThreshold";
import { AlexaContext } from "../../../App";
import useFirebaseDBModel from "../../../shared/hooks/useFirebaseDBModel";

const useMessages = () => {
  // Custom and React Hooks
  const dispatch = useDispatch();
  const { askGPT } = useOpenAPI();
  const {
    handleIncrementOfTokensNumber,
    countTokens,
    isContextTokensThresholdOvercomeBy,
    resetContextTokensTotal,
  } = useContextTokensThreshold();
  const { addUserAndAIMessageToFirebaseDB } = useFirebaseDBModel();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getResponseToNewSystemMessageWithoutUpdatingTokens = async (
    systemMessageContent: string,
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    return processNewMessage(systemMessageContent, _messages, true, false);
  };

  const getResponseToNewSystemMessage = async (
    systemMessageContent: string,
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    return processNewMessage(systemMessageContent, _messages, true, true);
  };

  const getResponseToNewUserMessage = async (
    userMessageContent: string,
    _messages: OpenAIMessageDTO[],
    userEmotion?: string
  ): Promise<string> => {
    return processNewMessage(
      userMessageContent,
      _messages,
      false,
      true,
      userEmotion
    );
  };

  const processNewMessage = async (
    messageContent: string,
    _messages: OpenAIMessageDTO[],
    isSystemMessage: boolean,
    updateTokens: boolean,
    userEmotion?: string
  ): Promise<string> => {
    let artificialIntelligenceResponse: string = "";
    await handleRestartContext(messageContent, _messages);

    if (isSystemMessage && !updateTokens) {
      addSystemMessageWithoutUpdateTokens(messageContent, _messages);

      artificialIntelligenceResponse = await askGPT(_messages);
      addAssistantMessageWithoutUpdateTokens(
        artificialIntelligenceResponse,
        _messages
      );
    } else if (isSystemMessage && updateTokens) {
      await addSystemMessageAndUpdateTokens(messageContent, _messages);

      artificialIntelligenceResponse = await askGPT(_messages);
      await addAssistantMessageAndUpdateTokens(
        artificialIntelligenceResponse,
        _messages
      );
    } else if (!isSystemMessage && updateTokens) {
      /*addSystemMessageWithoutUpdateTokens(
        "Deberás devolver una respuesta que tenga una longitud comprendida entre los 0 y los 300 carácteres",
        _messages
      );
      */
      await addUserMessageAndUpdateTokens(messageContent, _messages);

      artificialIntelligenceResponse = await askGPT(_messages, 75);

      if (userEmotion) {
        artificialIntelligenceResponse = `${artificialIntelligenceResponse} 
        He notado que te sientes ${userEmotion}. ¿Es cierto?. ¿Podrías describirme mejor tus sentimientos en este momento?`;
      }

      await addAssistantMessageAndUpdateTokens(
        artificialIntelligenceResponse,
        _messages
      );
    }

    return artificialIntelligenceResponse;
  };

  const addSystemMessageWithoutUpdateTokens = (
    _msg: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    addMessageWithoutUpdateTokens("system", _msg, _messages);
  };

  const addSystemMessageAndUpdateTokens = async (
    _msg: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    await addMessageAndUpdateTokens("system", _msg, _messages);
  };

  const addAssistantMessageWithoutUpdateTokens = (
    _msg: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    addMessageWithoutUpdateTokens("assistant", _msg, _messages);
  };

  const addAssistantMessageAndUpdateTokens = async (
    _msg: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    await addMessageAndUpdateTokens("assistant", _msg, _messages);
  };

  const addUserMessageAndUpdateTokens = async (
    _msg: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    await addMessageAndUpdateTokens("user", _msg, _messages);
  };

  const addMessageWithoutUpdateTokens = (
    _role: string,
    _content: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    const message = getMessageObject(_role, _content);
    addMessageTo(_messages, message);
  };

  const addMessageAndUpdateTokens = async (
    _role: string,
    _content: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    const message = getMessageObject(_role, _content);
    addMessageTo(_messages, message);
    // Guardar en BD userRequest-AIResponse
    addMessageToDB(_role, _content);
    handleIncrementOfTokensNumber(_content);
  };

  const getMessageObject = (
    _role: string,
    _content: string
  ): OpenAIMessageDTO => {
    return {
      role: _role,
      content: _content,
    };
  };

  const addMessageTo = (
    _messages: OpenAIMessageDTO[],
    _message: OpenAIMessageDTO
  ) => {
    _messages.push(_message);
  };

  const handleRestartContext = async (
    _prompt: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    if (isContextTokensThresholdOvercomeBy(countTokens(_prompt))) {
      await restartMessagesContextAndNumberOfTokens(_messages);
    }
  };

  const restartMessagesContextAndNumberOfTokens = async (
    _messages: OpenAIMessageDTO[]
  ) => {
    const artificialIntelligenceSummary = await resumeConversation(_messages);
    resetMessagesArray(_messages);
    printDebug(
      `+++ Inside restartConversationContextAndNumberOfTokens() - resetMessagesArray => ${JSON.stringify(
        _messages
      )} `
    );

    const systemMessageContent = `Voy a enviarte un resumen de la última conversación que has mantenido con un usuario. 
      Necesito que analices dicho resumen y que respondas a las peticiones del usuario teniendo en cuenta el contexto de la conversación extraído del resumen. 
      Además, quiero que actúes como un psicólogo que está conversando con un usuario. El resumen es el siguiente: ${artificialIntelligenceSummary}`;
    await addSystemMessageAndUpdateTokens(systemMessageContent, _messages);

    resetContextTokensTotal();
    handleIncrementOfTokensNumber(systemMessageContent);
  };

  const resumeConversation = async (_messages: OpenAIMessageDTO[]) => {
    let conversationMessages: OpenAIMessageDTO[] = [..._messages];
    const messageWithSystemRole = getMessageObject(
      "system",
      `Te voy a proporcionar toda la conversación mantenida entre un usuario y la API de Open AI. 
       Necesito que me hagas un resumen de la conversación para poder seguir conversando con el usuario manteniendo el mismo contexto del diálogo.
       Recuerda que deberás devolverme como respuesta únicamente el resumen que has realizado de la conversación.`
    );
    conversationMessages.shift(); // Remove first objet with the instructions with the role of the assistant
    conversationMessages.unshift(messageWithSystemRole); // Appends new system message with the new instructions to the beggining of the array
    printDebug(
      `+++ Inside resumeConversation() - conversationMessages => ${JSON.stringify(
        conversationMessages
      )} `
    );

    const artificialIntelligenceSummary = await askGPT(conversationMessages);
    return artificialIntelligenceSummary;
  };

  const resetMessagesArray = (_messages: OpenAIMessageDTO[]) => {
    _messages.length = 0;
  };

  const setOpenAIMessages = (_messages: OpenAIMessageDTO[]) => {
    dispatch(setMessages(_messages));
  };

  const addMessageToDB = async (_role: string, _content: string) => {
    const message = getMessageObject(_role, _content);
    await addUserAndAIMessageToFirebaseDB(message);
  };

  return {
    getResponseToNewSystemMessageWithoutUpdatingTokens,
    getResponseToNewSystemMessage,
    getResponseToNewUserMessage,
    addSystemMessageAndUpdateTokens,
    addUserMessageAndUpdateTokens,
    addSystemMessageWithoutUpdateTokens,
    addAssistantMessageAndUpdateTokens,
    handleRestartContext,
    setOpenAIMessages,
    addMessageToDB,
  };
};

export default useMessages;
