/************************************************************************************************************
 *                                                                                                          *
 * File: useDialogController.tsx                                                                            *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing Dialog view                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  resetUserSpeechData,
} from "../../shared/redux/slices/voiceSlice";
import { AlexaContext } from "../../App";
import { VoiceAPIStatus } from "../../shared/enums/VoiceAPIStatus";
import { VoiceMsgStatus } from "../../shared/enums/VoiceMsgStatus";
import useUserGeneralInput from "./hooks/useUserGeneralInput";
import { OpenAIRootState } from "../../shared/redux/slices/openAISlice";
import useSpeechResponse from "./hooks/useSpeechResponse";
import { UserDBRootState } from "../../shared/redux/slices/userDBSlice";
import useLanguage from "../../shared/hooks/useLanguage";

const useDialogController = () => {
  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [seeCorrectionsEnabled, setSeeCorretionsEnabled] =
    useState<boolean>(false);

  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const voiceMsgProps = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceMsgProps
  );
  const processingUserRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.processingUserRequest
  );
  const intentType = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.intentType
  );
  const userRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.userRequest
  );
  const userLanguageCode = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.language
  );
  const contextTokensTotal = useSelector(
    (state: OpenAIRootState) => state.openAIState.contextTokensTotal
  );
  const messages = useSelector(
    (state: OpenAIRootState) => state.openAIState.messages
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { handleAnswerToGeneralUserInput } = useUserGeneralInput();
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { getGreetingsWithSSML } = useLanguage();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  /**
   * Shows the loading icon at app first start or every time the user sends a request
   */
  const showLoadingIcon = useCallback(() => {
    printDebug(`+++ INSIDE loading() - voiceAPIStatus => ${voiceAPIStatus}`);

    if (voiceAPIStatus === VoiceAPIStatus.LOADING || processingUserRequest) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [voiceAPIStatus, processingUserRequest]);

  const setIsSpeaking = useCallback(() => {
    if (voiceMsgProps.status === VoiceMsgStatus.START_SPEECH) {
      setIsSpeechOn(true);
    } else {
      setIsSpeechOn(false);
    }
  }, [voiceMsgProps]);

  const sayStartSpeech = useCallback(() => {
    speechResponseToUserRequest(
      getGreetingsWithSSML(userLanguageCode),
      "time-for-general-requests"
    );
  }, [voiceAPIStatus]);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    if (intentType === "conversation-intent") {
      await handleAnswerToGeneralUserInput(userRequest, messages);
    }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

  const handleOnTouchStartEvent = () => {
    stopAlexaSpeech();
  };

  const handleSeeCorrectionsOnTouchEvent = () => {
    setSeeCorretionsEnabled(true);
  };

  const stopAlexaSpeech = () => {
    printDebug("+++ INSIDE prepareForUserGeneralRequest - touch event +++");
    speechResponseToUserRequest("", "no-reprompt");
    setIsLoading(false);
    setIsSpeechOn(false);
  };

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    showLoadingIcon();
  }, [showLoadingIcon]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the sayStartSpeech function are modified
   */
  useEffect(() => {
    sayStartSpeech();
  }, [sayStartSpeech]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the sayStartSpeech function are modified
   */
  useEffect(() => {
    setIsSpeaking();
  }, [setIsSpeaking]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the handleVoiceAPIRequests function are modified
   */
  useEffect(() => {
    handleVoiceAPIIntents();
  }, [handleVoiceAPIIntents]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the handleVoiceAPIRequests function are modified
   */
  useEffect(() => {
    printDebug(
      `+++ Inside useDialogController() - contextTokensTotal  => ${JSON.stringify(
        contextTokensTotal
      )} `
    );
  }, [contextTokensTotal]);

  return {
    messages,
    seeCorrectionsEnabled,
    isLoading,
    isSpeechOn,
    handleOnTouchStartEvent,
    handleSeeCorrectionsOnTouchEvent,
    setSeeCorretionsEnabled,
  };
};

export default useDialogController;
