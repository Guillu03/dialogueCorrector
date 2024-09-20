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
import { LevelType } from "../../../shared/constants/levels";
import { TopicType } from "../../../shared/constants/topics";

const useUserGeneralInput = () => {
  // Constants
  const INITIAL_PROMPT = (
    _userAge: number,
    _languageName: string,
    _level: string,
    _levelObject: LevelType,
    _topicObject: TopicType
  ): string => {
    return `
      Contexto:

      Actúa como un profesor de idiomas enfocado en mejorar las habilidades comunicativas del usuario. Tu objetivo es mantener una conversación proactiva y continua con el usuario que le permita practicar en el progreso de un idioma. El idioma seleccionado es: ${_languageName}.

      Deberás mantener una conversación con el usuario del nivel: ${_level} - ${_levelObject.name}. En dicho nivel, el objetivo es el siguiente: ${_levelObject.description}. Deberás adaptar el nivel de complejidad del diálogo al nivel de competencia del usuario indicado anteriormente.

      Además, el tema de conversación será: ${_topicObject.name}. El objetivo de este tema es: ${_topicObject.description}. Deberás tener en cuenta la edad del usuario, que en este caso es: ${_userAge}.
`;
  };

  // Global variables
  const userAge = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.age
  );
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const level = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.level
  );
  const topicKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.topicKey
  );

  // Custom and React Hooks
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { handleUserEmotionalAnalysis } = useUserEmotionalAnalysis();
  const {
    getGreetings,
    getLanguageObjectByKey,
    getLanguageLevelObjectByKey,
    getLanguageTopicObjectByKey,
  } = useLanguage();
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
    const languageName = getLanguageObjectByKey(languageKey)?.name;
    const levelObject = getLanguageLevelObjectByKey(level);
    const topicObject = getLanguageTopicObjectByKey(level, topicKey);
    const greetings = getGreetings(languageKey);

    if (isConversationStarting(_messages)) {
      if (languageName && levelObject && topicObject) {
        addSystemMessageAndUpdateTokens(
          INITIAL_PROMPT(
            userAge,
            languageName,
            level,
            levelObject,
            topicObject
          ),
          _messages
        );
      }
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
