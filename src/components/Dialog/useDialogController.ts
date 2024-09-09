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
import useQuestionnaire from "./hooks/useQuestionnaire";
import { OpenAIRootState } from "../../shared/redux/slices/openAISlice";
import useFirebaseDBModel from "../../shared/hooks/useFirebaseDBModel";
import useSpeechResponse from "./hooks/useSpeechResponse";
import { useNormalizeString } from "../../shared/utils/useNormalizeString";
import useTest from "./__tests__/useTest";

const useDialogController = () => {
  // CONSTANS
  const START_SPEECH = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
     ¡Hola! Mi nombre es Alexa. ¿Qué es lo que te gustaría decirme? </amazon:emotion><break strength='strong'/></voice>`;

  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [isDialogBlocked, setIsDialogBlocked] = useState<boolean>(false);

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
  const contextTokensTotal = useSelector(
    (state: OpenAIRootState) => state.openAIState.contextTokensTotal
  );
  const messages = useSelector(
    (state: OpenAIRootState) => state.openAIState.messages
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { handleAnswerToGeneralUserInput } = useUserGeneralInput();
  const {
    hasQuestionnaireStarted,
    setHasQuestionnaireStarted,
    handleStartInitialQuestionnaire,
    handleStartFinalQuestionnaire,
    handleAnswerToQuestionnaire,
    handleGPTAnswersToEmpathyQuestionnaire,
    handleGPTAnswersToEmotionalQuestionnaire,
  } = useQuestionnaire(setIsDialogBlocked);
  const { addUserToFirebaseDB } = useFirebaseDBModel();
  const { speechResponseToUserRequest } = useSpeechResponse();

  //FIXME: eliminar
  //useTest();

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
    speechResponseToUserRequest(START_SPEECH, "time-for-general-requests");
  }, [voiceAPIStatus]);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    /**
     * TODO: Eliminar comentarios si se quiere permitir rellenar cuestionarios automáticamente.
     *          También se deberá comentar el if de abajo ya que se encuentra incluido en este fragmento de código.
     * 
    if (intentType === "conversation-intent") {
      const normalizedUserRequest = useNormalizeString(userRequest);

      if (normalizedUserRequest.includes("cuestionario inicial")) {
        handleStartInitialQuestionnaire();
      } else if (normalizedUserRequest.includes("cuestionario final")) {
        handleStartFinalQuestionnaire();
      } else if (
        normalizedUserRequest.includes("cuestionario automatico emociones")
      ) {
        //Enviar a GPT cuestionario de emociones para rellenar automáticamente
        await handleGPTAnswersToEmotionalQuestionnaire();
      } else if (
        normalizedUserRequest.includes("cuestionario automatico empatia")
      ) {
        //Enviar a GPT cuestionario de empatía para rellenar automáticamente
        await handleGPTAnswersToEmpathyQuestionnaire();
      } else if (hasQuestionnaireStarted) {
        await handleAnswerToQuestionnaire(userRequest);
      } else {
        await handleAnswerToGeneralUserInput(userRequest);
      }
    } 
    */

    if (intentType === "conversation-intent") {
      await handleAnswerToGeneralUserInput(userRequest, messages);
    }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

  const handleOnTouchStartEvent = () => {
    stopAlexaSpeech();
  };

  const stopAlexaSpeech = () => {
    printDebug("+++ INSIDE prepareForUserGeneralRequest - touch event +++");
    speechResponseToUserRequest("", "no-reprompt");
    setHasQuestionnaireStarted(false);
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

  return { isLoading, isSpeechOn, isDialogBlocked, handleOnTouchStartEvent };
};

export default useDialogController;
