/************************************************************************************************************
 *                                                                                                          *
 * File: useAlexaAPI.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing the interaction with Alexa's skill backend                    *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import {
  setVoiceAPIStatus,
  setVoiceMicroStatus,
  setVoiceMsgStatus,
  setDeviceId,
  setProcessingUserRequest,
  setUserSpeechData,
  resetUserSpeechData,
} from "../../shared/redux/slices/voiceSlice";
import { VoiceAPIStatus } from "../../shared/enums/VoiceAPIStatus";
import { VoiceMsgStatus } from "../../shared/enums/VoiceMsgStatus";
import { VoiceDTO } from "../../shared/dtos/VoiceDTO";
import { VoiceMicrophoneStatus } from "../../shared/enums/VoiceMicrophoneStatus";

/**
 * Variable loaded at runtime from the Alexa HTML API script.
 *
 */
interface AlexaWindow extends Window {
  Alexa: any;
}
declare let window: AlexaWindow;

const useAlexaAPI = () => {
  /* Local Variables */
  const [alexaClient, setAlexaClient] = useState<any>(null);
  const [debugMessages, setDebugMessages] = useState<string[]>([]);

  /* Redux and Custom Hooks */
  const dispatch = useDispatch();

  /**
   * Create and initialize Alexa's client.
   *
   */
  const beginApp = useCallback(async () => {
    printDebug("Beginning Alexa.create");

    if (window.Alexa) {
      window.Alexa.create({
        version: "1.0",
      })
        .then((args: any) => {
          if (args.alexa) {
            setAlexaClient(args.alexa);
            args.alexa.skill.onMessage(messageReceivedCallback);
            args.alexa.speech.onStarted(speechStartedCallback);
            args.alexa.speech.onStopped(speechStoppedCallback);
            args.alexa.voice.onMicrophoneOpened(microphoneOpenedCallback);
            args.alexa.voice.onMicrophoneClosed(microphoneClosedCallback);
            printDebug(
              "Alexa is ready - newest version 5 :) Received initial data 45"
            );

            if (args.message.deviceId) {
              printDebug("Alexa Skill init data: " + args.message.deviceId);
              console.log("Alexa Skill init data: " + args.message.deviceId);
              dispatch(setDeviceId(args.message.deviceId));
            }
            dispatch(setVoiceAPIStatus(VoiceAPIStatus.OK));
          } else {
            printDebug(`Alexa failed to initialize, code: ${args.code}`);
            dispatch(setVoiceAPIStatus(VoiceAPIStatus.NOT_OK));
          }
        })
        .catch((error: any) => {
          printDebug(`Alexa not ready :(. Error: ${error}`);
          dispatch(setVoiceAPIStatus(VoiceAPIStatus.NOT_OK));
        });
    } else {
      dispatch(setVoiceAPIStatus(VoiceAPIStatus.NOT_OK));
    }
  }, []);

  /**
   * Add a new debug message to the array
   *
   * @param _message
   */
  const addDebugMessage = (_message: string) => {
    setDebugMessages((prevMessages) => [...prevMessages, _message]);
    console.log(_message);
  };

  /**
   * Delete all exisiting debug messages
   *
   * @param _message
   */
  const resetDebugMessages = () => {
    setDebugMessages([]);
  };

  /**
   * Prints debug messages on the screen
   *
   * @param _msg
   */
  const printDebug = (_msg: any) => {
    if (typeof _msg !== "string") {
      addDebugMessage(JSON.stringify(_msg, null, 2));
    } else {
      addDebugMessage(_msg);
    }
  };

  /**
   * Callback used when sending a message to Alexa's skill.
   *  Displays the status information of the sent message on the screen.
   *
   * @param _result
   */
  const messageSentCallback = (_result: any) => {
    if (_result.statusCode == 200) {
      printDebug("message was sent to backend successfully");
    } else {
      dispatch(setVoiceMsgStatus(VoiceMsgStatus.END_SPEECH));
      printDebug("failed to send message to skill backend:");
    }
  };

  /**
   * Send messages to Alexa's skill
   *
   * @param _msg
   */
  const sendMessage = useCallback(
    async (_msg: any) => {
      try {
        printDebug(
          "sending message to skill endpoint ==> " + JSON.stringify(_msg)
        );
        printDebug("+++ INSIDE sendMessage - alexaClient ==> " + alexaClient);
        await alexaClient.skill.sendMessage(_msg, messageSentCallback);
      } catch (error) {
        dispatch(setVoiceMsgStatus(VoiceMsgStatus.END_SPEECH));
        printDebug("Alexa error ==> " + error);
      }
    },
    [alexaClient]
  );

  /**
   * Callback used when receiving messages from Alexa's skill.
   *  Processes received messages by specifying intent's type and user's speech option.
   *
   * @param _message
   */
  const messageReceivedCallback = (_message: any) => {
    let newUserIntent: VoiceDTO;

    printDebug("Web APP received a message from the skill endpoint");
    printDebug(_message);

    if (_message) {
      newUserIntent = {
        intentType: _message.intentType,
        userRequest: _message.userRequest,
      };

      dispatch(setProcessingUserRequest(true));
      dispatch(setUserSpeechData(newUserIntent));
    }
  };

  /**
   * Receives an event to know when Alexa has started speaking.
   *
   */
  const speechStartedCallback = () => {
    dispatch(setVoiceMsgStatus(VoiceMsgStatus.START_SPEECH));
  };

  /**
   * Receives an event to know when Alexa has stopped speaking.
   *
   */
  const speechStoppedCallback = () => {
    dispatch(setVoiceMsgStatus(VoiceMsgStatus.END_SPEECH));
  };

  /**
   * Receives an event to know when Alexa has stopped speaking.
   *
   */
  const microphoneOpenedCallback = () => {
    dispatch(setVoiceMicroStatus(VoiceMicrophoneStatus.MICROPHONE_OPENED));
  };

  /**
   * Receives an event to know when Alexa has stopped speaking.
   *
   */
  const microphoneClosedCallback = () => {
    dispatch(setVoiceMicroStatus(VoiceMicrophoneStatus.MICROPHONE_CLOSED));
  };

  /**
   * Resets the received data from Alexa's skill.
   *
   */
  const resetVoiceIntent = useCallback(() => {
    dispatch(resetUserSpeechData());
  }, []);

  /**
   * Execute the method on the initial rendering of the component.
   *
   */
  useEffect(() => {
    beginApp();
  }, []);

  return {
    debugMessages,
    printDebug,
    sendMessage,
    resetVoiceIntent,
    resetDebugMessages,
  };
};

export default useAlexaAPI;
