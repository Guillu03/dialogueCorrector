/************************************************************************************************************
 *                                                                                                          *
 * File: useAlexaWrapper.tsx                                                                                *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing App                                                           *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/

// Import Redux elements
import { useDispatch } from "react-redux";
import { setVoiceMsgStatus } from "../redux/slices/voiceSlice";
import useAlexaAPI from "../../api/voice/useAlexaAPI";
import { VoiceMsgStatus } from "../enums/VoiceMsgStatus";
import { VoiceAPIStatus } from "../enums/VoiceAPIStatus";

const useAlexaWrapper = () => {
  /* Custom and React Hooks */
  const dispatch = useDispatch();
  const { debugMessages, printDebug, sendMessage, resetDebugMessages } =
    useAlexaAPI();

  /**
   * Sends messages to Alexa's skill backend
   */
  const sendTextToAlexa = async (
    _voiceAPIStatus: VoiceAPIStatus,
    _text: string,
    _otherInfo?: string
  ) => {
    if (_voiceAPIStatus === VoiceAPIStatus.OK) {
      dispatch(setVoiceMsgStatus(VoiceMsgStatus.SEND_SPEECH));
      await sendMessage({
        intentRequest: "text-to-speech-intent",
        speech: _text,
        otherInfo: _otherInfo,
      });
    }
  };

  /**
   * Sends log messages to Alexa's skill backend
   */
  const sendLogToAlexa = async (
    _voiceAPIStatus: VoiceAPIStatus,
    _logText: string
  ) => {
    if (_voiceAPIStatus === VoiceAPIStatus.OK) {
      await sendMessage({
        intentRequest: "log-text-intent",
        logTxt: _logText,
      });
    }
  };

  /**
   * Checks if Alexa is ready. The VoiceAPIStatus can be one of the following options:
   *  - LOADING => if Alexa is not ready yet.
   *  - OK => if Alexa has loaded and the connection has succeded.
   *  - NOT_OK => if Alexa has loaded but the connection has failed.
  
  const isAlexaReady = useCallback(() => {
    printDebug(`+++ INSIDE isAlexaReady() => ${voiceAPIStatus}`);
    if (voiceAPIStatus !== VoiceAPIStatus.LOADING) {
      printDebug(`+++ INSIDE isAlexaReady() => setAlexaLoaded(true)`);
      return true;
    }
    return false;
  }, [voiceAPIStatus]);
   */

  return {
    debugMessages,
    printDebug,
    sendLogToAlexa,
    sendTextToAlexa,
    resetDebugMessages,
  };
};

export default useAlexaWrapper;
