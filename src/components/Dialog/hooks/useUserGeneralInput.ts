import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useMessages from "../hooks/useMessages";
import { useContext } from "react";
import { AlexaContext } from "../../../App";
import useSpeechResponse from "./useSpeechResponse";
import useUserEmotionalAnalysis from "./useUserEmotionalAnalysis";
import { useSelector } from "react-redux";
import useLanguage from "../../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../../shared/redux/slices/languageSlice";
import { UserDBRootState } from "../../../shared/redux/slices/userDBSlice";

const useUserGeneralInput = () => {
  // Constants
  const INITIAL_PROMPT = (
    _userAge: number,
    _language: string,
    _level: string
  ): string => {
    return `
      Contexto: Actúa como un profesor de idiomas enfocado en mejorar las habilidades comunicativas del usuario en ${_language}. 
      Tu objetivo es mantener una conversación continua con el usuario, seleccionando una variedad de temas adecuados para fomentar la práctica constante y el progreso en el idioma. 
      Adapta el nivel de complejidad del diálogo al nivel de competencia del usuario (${_level}), asegurándote de que la comunicación sea clara, comprensible y ajustada a sus necesidades.

      Instrucciones específicas:
      Considera la edad del usuario que en este caso es ${_userAge}, si es menor de 12 años, ajusta el diálogo para que sea apropiado y accesible para niños, utilizando un lenguaje sencillo y temas adecuados para su edad.
      Si el usuario tiene 12 años o más, adapta el contenido y la complejidad del diálogo de acuerdo con el nivel seleccionado (${_level}), proporcionando desafíos lingüísticos adecuados para fomentar una práctica efectiva y progresiva.
      En cualquier caso deberás tener una actitud proactiva seleccionando e iniciando tú los temas de los que hablar según el nivel y edad del usuario.

      Objetivo final: Proporcionar una experiencia de aprendizaje personalizada que motive al usuario a mejorar sus habilidades de comunicación en ${_language}, respetando su nivel de competencia y edad.
    `;
  };

  // Global variables
  const userAge = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.age
  );
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
        INITIAL_PROMPT(userAge, languageName, languageLevel),
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
