import { useContext } from "react";
import { AlexaContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  setProcessingUserRequest,
} from "../../../shared/redux/slices/voiceSlice";
import useLanguage from "../../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../../shared/redux/slices/languageSlice";
import {
  EnvironmentRootState,
  setHighTemperatureAlert,
} from "../../../shared/redux/slices/environmentSlice";

const useSpeechResponse = () => {
  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const isHighTemperatureAlertActive = useSelector(
    (state: EnvironmentRootState) =>
      state.environmentState.isHighTemperatureAlertActive
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { getLanguageObjectByKey } = useLanguage();

  // App Context Data
  const { printDebug, sendTextToAlexa } = useContext(AlexaContext);

  const speechResponseToUserRequest = async (
    _response: string,
    _otherInfo?: string
  ) => {
    let finalResponse = _response;

    // if (isHighTemperatureAlertActive) {
    //   const warningMessage =
    //     "La temperatura de tu habitación es demasiado alta, ventila la habitación por favor. Ahora, después de avisarte, para seguir con la conversación... ";
      
    //   if (_response) {
    //     finalResponse = warningMessage + _response;
    //   }
      
    //   printDebug("Añadiendo aviso de temperatura a la respuesta de Alexa.");

    //   dispatch(setHighTemperatureAlert(false));
      
    //   dispatch(setLastAlertTimestamp(Date.now()));
    // }

    const formatedResponse = formattingAlexaResponse(finalResponse);
    await sendTextToAlexa(voiceAPIStatus, formatedResponse, _otherInfo);
    dispatch(setProcessingUserRequest(false));
  };

  // const formattingAlexaResponse = (_response: string) => {
  //   const languageObject = getLanguageObjectByKey(languageKey);

  //   printDebug("Voice => " + languageObject?.voice);

  //   let formatedResponse = `<voice name="${
  //     languageObject?.voice ? languageObject.voice : "Lucia"
  //   }">
  //   <lang xml:lang='${languageObject?.code ? languageObject.code : "es-ES"}'>
  //   `;
  //   formatedResponse += _response;
  //   formatedResponse += `</lang></voice>`;

  //   return formatedResponse;
  // };
  const formattingAlexaResponse = (_response: string) => {
    const languageObject = getLanguageObjectByKey(languageKey);
    const voice = languageObject?.voice ?? "Lucia";
    const code  = languageObject?.code  ?? "es-ES";

    return `<speak><voice name="${voice}"><lang xml:lang='${code}'>${_response}</lang></voice></speak>`;
  };

  return {
    speechResponseToUserRequest,
  };
};

export default useSpeechResponse;
