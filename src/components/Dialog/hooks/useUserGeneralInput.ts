import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useMessages from "../hooks/useMessages";
import { useContext } from "react";
import { AlexaContext } from "../../../App";
import useSpeechResponse from "./useSpeechResponse";
import useUserEmotionalAnalysis from "./useUserEmotionalAnalysis";
import { useDispatch, useSelector } from "react-redux";
import useLanguage from "../../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../../shared/redux/slices/languageSlice";
import { UserDBRootState } from "../../../shared/redux/slices/userDBSlice";
import { LevelType } from "../../../shared/constants/levels";
import { TopicType } from "../../../shared/constants/topics";
import { EnvironmentRootState, setHighHumidityAlert, setHighTemperatureAlert, setLowHumidityAlert, setMq135Alert, setMq138Alert, setMq2Alert, setMq3Alert, setMq7Alert } from "../../../shared/redux/slices/environmentSlice";
import useOpenAPI from "../../../api/open-ai/useOpenAI";

const useUserGeneralInput = () => {
  // Constants
  const INITIAL_PROMPT = (
    _userAge: number,
    _languageName: string,
    _levelObject: LevelType,
    _topicObject: TopicType
  ): string => {
    return `
      Contexto:

      Actúa como un profesor de idiomas enfocado en mejorar las habilidades comunicativas del usuario. Tu objetivo es mantener una conversación proactiva y continua con el usuario que le permita practicar en el progreso de un idioma. El idioma seleccionado es: ${_languageName}.

      Deberás mantener una conversación con el usuario del nivel: ${_levelObject.key} - ${_levelObject.name}. En dicho nivel, el objetivo es el siguiente: ${_levelObject.description}. Deberás adaptar el nivel de complejidad del diálogo al nivel de competencia del usuario indicado anteriormente.

      Deberás garantizar un diálogo proactivo sobre el siguiente tema de conversación: ${_topicObject.name}. El objetivo de este diálogo es: ${_topicObject.description}. Además, también deberás tener en cuenta la edad del usuario que en este caso es: ${_userAge}.
`;
  };

  // Global variables
  const userAge = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.age
  );
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const levelObject = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.levelObject
  );
  const topicObject = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.topicObject
  );
  const { askGPT } = useOpenAPI();
  const dispatch = useDispatch();

  // Custom and React Hooks
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { handleUserEmotionalAnalysis } = useUserEmotionalAnalysis();
  const { getGreetings, getLanguageObjectByKey } = useLanguage();
  const {
    getResponseToNewUserMessage,
    addSystemMessageAndUpdateTokens,
    addAssistantMessageAndUpdateTokens,
    setOpenAIMessages,
  } = useMessages();

  const { isHighTemperatureAlertActive, isHighHumidityAlertActive, isLowHumidityAlertActive } = useSelector((state: EnvironmentRootState) => state.environmentState);
  const alerts = useSelector((state: EnvironmentRootState) => state.environmentState);
  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  // const handleAnswerToGeneralUserInput = async (
  //   _userRequest: string,
  //   _messages: OpenAIMessageDTO[]
  // ) => {
  //   const artificialIntelligenceResponse = await getResponseToUserRequest(
  //     _userRequest,
  //     _messages
  //   );
  //   speechResponseToUserRequest(artificialIntelligenceResponse);
  // };

  const handleAnswerToGeneralUserInput = async (
    _userRequest: string,
    _messages: OpenAIMessageDTO[]
  ) => {
    let adviceParts: string[] = [];
    let alertsToReset: any[] = []; 

    if (isHighTemperatureAlertActive) {
      printDebug("Alerta de temperatura alta detectada. Generando respuesta combinada.");

      const advicePrompt = "Dame un consejo muy conciso y claro sobre qué hacer si la temperatura ambiente es superior a 26 grados Celsius.";
      try{
        const temperatureAdvice = await askGPT([{ role: "user", content: advicePrompt }]);
        adviceParts.push(temperatureAdvice);
        printDebug(`Consejo de temperatura obtenido: ${temperatureAdvice}`);
      }
      catch(error)
      {
        printDebug(`Error al obtener consejo de temperatura: ${error}`);
        adviceParts.push("He detectado que la temperatura es alta, pero he tenido un problema al generar un consejo. Por favor, ventila la habitación.");
      }

      alertsToReset.push(setHighTemperatureAlert(false));
    } 

    if (isHighHumidityAlertActive || isLowHumidityAlertActive) {
        let humidityPrompt = "";
        let fallbackMessage = "";

        if (isHighHumidityAlertActive) {
            printDebug("Alerta de humedad alta detectada. Generando consejo.");
            humidityPrompt = "La humedad es demasiado alta dentro de la habitación, lo que supone un riesgo sanitario y de desarrollo de moho. Ahora, dame un consejo muy conciso y claro sobre qué hacer en esta situación.";
            fallbackMessage = "He detectado que la humedad es muy alta, lo cual puede ser perjudicial. He tenido un problema al generar un consejo, pero te recomiendo ventilar bien.";
            alertsToReset.push(setHighHumidityAlert(false));
        } else {
            printDebug("Alerta de humedad baja detectada. Generando consejo.");
            humidityPrompt = "La humedad es demasiado baja en la habitación. Ahora, dame un consejo muy conciso y claro sobre qué hacer para aumentarla.";
            fallbackMessage = "He detectado que la humedad es muy baja. Esto puede causar sequedad. No he podido generar un consejo, pero usar un humidificador podría ayudar.";
            alertsToReset.push(setLowHumidityAlert(false));
        }
        
        try {
            const humidityAdvice = await askGPT([{ role: "user", content: humidityPrompt }]);
            adviceParts.push(humidityAdvice);
            printDebug(`Consejo de humedad obtenido: ${humidityAdvice}`);
        } catch(error) {
            printDebug(`Error al obtener consejo de humedad: ${error}`);
            adviceParts.push(fallbackMessage);
        }
    }

    if (alerts.isMq2AlertActive) {
        adviceParts.push("Presencia peligrosa de humo, butano o propano");
        alertsToReset.push(setMq2Alert(false));
    }
    if (alerts.isMq3AlertActive) {
        adviceParts.push("Presencia peligrosa de vapores de alcohol");
        alertsToReset.push(setMq3Alert(false));
    }
    if (alerts.isMq7AlertActive) {
        adviceParts.push("Presencia excesiva de monóxido de carbono");
        alertsToReset.push(setMq7Alert(false));
    }
    if (alerts.isMq135AlertActive) {
        adviceParts.push("Presencia peligrosa de aire contaminado");
        alertsToReset.push(setMq135Alert(false));
    }
    if (alerts.isMq138AlertActive) {
        adviceParts.push("Presencia peligrosa de vapores de productos químicos");
        alertsToReset.push(setMq138Alert(false));
    }

    const conversationalResponse = await getResponseToUserRequest(_userRequest, _messages);

    let finalResponse = "";
    if (adviceParts.length > 0) {
        finalResponse = adviceParts.join(" Además, ");
        finalResponse += `. Por otro lado, y en cuanto a lo que mencionabas, ${conversationalResponse}`;
    } else {
        finalResponse = conversationalResponse;
    }

    printDebug(`Respuesta final concatenada: ${finalResponse}`);

    await speechResponseToUserRequest(finalResponse);

    if (alertsToReset.length > 0) {
        alertsToReset.forEach(action => dispatch(action));
    }
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
    const greetings = getGreetings(languageKey);

    if (isConversationStarting(_messages)) {
      if (languageName && levelObject && topicObject) {
        addSystemMessageAndUpdateTokens(
          INITIAL_PROMPT(userAge, languageName, levelObject, topicObject),
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
