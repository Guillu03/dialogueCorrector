import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useMessages from "../hooks/useMessages";
import { useContext } from "react";
import { AlexaContext } from "../../../App";
import useSpeechResponse from "./useSpeechResponse";
import useUserEmotionalAnalysis from "./useUserEmotionalAnalysis";
import { useSelector } from "react-redux";
import useLanguage from "../../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../../shared/redux/slices/languageSlice";

const useUserGeneralInput = () => {
  // Constants
  const INITIAL_PROMPT = (_language: string, _level: string): string => {
    return `
              Contexto: Quiero que actúes como un profesor de idiomas. 
              Tu objetivo será conversar con el usuario sobre una variedad de temas que seleccionarás como docente, 
              orientando la conversación para que el usuario practique de manera continua y mejore su habilidad comunicativa en el idioma ${_language}. 
              Asegúrate de adaptar el nivel de complejidad del diálogo al nivel de competencia del usuario: ${_level}, 
              proporcionando una comunicación adecuada y comprensible que fomente la práctica efectiva y progresiva.
              
              Solamente deberás utilizar texto en tu respuesta, no deberás usar emojis ni caritas ni ningún otro elemento visual.
              
              Instrucciones:
                1. Deberás ser siempre proactivo haciendo que el usuario hable.
                2. Provee variedad en las preguntas y respuestas para mantener la conversación interesante.
                3. Trata de hacer que el diálogo sea uno natural y real.
                4. Deberás devolver como respuesta texto, no emojis ni caritas ni ningún otro elemento visual.
              `;
  };

  // Global variables
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const levelKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.levelKey
  );

  // Custom and React Hooks
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { handleUserEmotionalAnalysis } = useUserEmotionalAnalysis();
  const { getGreetings, getLanguageObjectByKey, getLanguageLevelObjectByKey } =
    useLanguage();
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
    //const userEmotion = await handleUserEmotionalAnalysis(messagesCopy);
    const userEmotion = "";

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
    const languageName = getLanguageObjectByKey(languageKey)?.name || "Español";
    const languageLevel =
      getLanguageLevelObjectByKey(levelKey)?.name || "Nivel Principiante";
    const greetings = getGreetings(languageKey);

    if (isConversationStarting(_messages)) {
      addSystemMessageAndUpdateTokens(
        INITIAL_PROMPT(languageName, languageLevel),
        _messages
      );
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
