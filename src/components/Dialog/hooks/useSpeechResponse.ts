import { useContext } from "react";
import { AlexaContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  setProcessingUserRequest,
} from "../../../shared/redux/slices/voiceSlice";
import useLanguage from "../../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../../shared/redux/slices/languageSlice";

const useSpeechResponse = () => {
  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
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
    const formatedResponse = formattingAlexaResponse(_response);
    await sendTextToAlexa(voiceAPIStatus, formatedResponse, _otherInfo);
    dispatch(setProcessingUserRequest(false));
  };

  const formattingAlexaResponse = (_response: string) => {
    const languageObject = getLanguageObjectByKey(languageKey);

    printDebug("Voice => " + languageObject?.voice);

    let formatedResponse = `<voice name="${
      languageObject?.voice ? languageObject.voice : "Lucia"
    }">
    <lang xml:lang='${languageObject?.code ? languageObject.code : "es-ES"}'>
    `;
    formatedResponse += _response;
    formatedResponse += `</lang></voice>`;

    return formatedResponse;
  };

  return {
    speechResponseToUserRequest,
  };
};

export default useSpeechResponse;
