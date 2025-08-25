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
import { AlexaContext, FirebaseContext } from "../../App"; 
import { VoiceAPIStatus } from "../../shared/enums/VoiceAPIStatus";
import { VoiceMsgStatus } from "../../shared/enums/VoiceMsgStatus";
import useUserGeneralInput from "./hooks/useUserGeneralInput";
import { OpenAIRootState } from "../../shared/redux/slices/openAISlice";
import useSpeechResponse from "./hooks/useSpeechResponse";
import useLanguage from "../../shared/hooks/useLanguage";
import { LanguageRootState } from "../../shared/redux/slices/languageSlice";
import { useNavigate } from "react-router-dom";
import { setHighTemperatureAlert, EnvironmentRootState, setHighHumidityAlert, setLowHumidityAlert, 
    setMq2Alert,
    setMq3Alert,
    setMq7Alert,
    setMq135Alert,
    setMq138Alert,} from "../../shared/redux/slices/environmentSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { ref, onValue, query, limitToLast, get } from "firebase/database";

type TemperatureReading = {
  value: number;
  timestamp: number;
};

type SensorReading = {
  value: number;
  timestamp: number;
};

const useDialogController = () => {
  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [seeCorrectionsEnabled, setSeeCorretionsEnabled] =
    useState<boolean>(false);

  const [latestTemperature, setLatestTemperature] = useState<number | null>(null);
  const [latestHumidity, setLatestHumidity] = useState<number | null>(null);
  const [latestMq2, setLatestMq2] = useState<number | null>(null);
  const [latestMq3, setLatestMq3] = useState<number | null>(null);
  const [latestMq7, setLatestMq7] = useState<number | null>(null);
  const [latestMq135, setLatestMq135] = useState<number | null>(null);
  const [latestMq138, setLatestMq138] = useState<number | null>(null);

  // const [temperatureReadings, setTemperatureReadings] = useState<TemperatureReading[]>([]);
  // const [humidityReadings, setHumidityReadings] = useState<SensorReading[]>([]);
  

  // const [mq2Readings, setMq2Readings] = useState<SensorReading[]>([]);
  // const [mq3Readings, setMq3Readings] = useState<SensorReading[]>([]);
  // const [mq7Readings, setMq7Readings] = useState<SensorReading[]>([]);
  // const [mq135Readings, setMq135Readings] = useState<SensorReading[]>([]);
  // const [mq138Readings, setMq138Readings] = useState<SensorReading[]>([]);

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
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const contextTokensTotal = useSelector(
    (state: OpenAIRootState) => state.openAIState.contextTokensTotal
  );
  const messages = useSelector(
    (state: OpenAIRootState) => state.openAIState.messages
  );
  // const { 
  //   lastAlertTimestamp, 
  //   lastHumidityAlertTimestamp,
  //   lastGasAlertTimestamp 
  // } = useSelector((state: EnvironmentRootState) => state.environmentState);

  // Custom and React Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleAnswerToGeneralUserInput } = useUserGeneralInput();
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { getGreetingsWithSSML } = useLanguage();
  const { getRealtimeDb } = useContext(FirebaseContext);

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
      getGreetingsWithSSML(languageKey),
      "time-for-general-requests"
    );
  }, [voiceAPIStatus, languageKey]);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    if (intentType === "conversation-intent") {
      if (userRequest.includes("ver correcciones")) {
        handleSeeCorrectionsOnTouchEvent();
      } else if (userRequest.includes("volver a pantalla principal")) {
        navigate("/");
      } else {
        await handleAnswerToGeneralUserInput(userRequest, messages);
      }
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

  // useEffect(() => {
  //   let unsubscribe: () => void;

  //   const processGasSensor = (
  //       latestValue: number | undefined,
  //       readings: SensorReading[],
  //       setReadings: React.Dispatch<React.SetStateAction<SensorReading[]>>,
  //       threshold: number,
  //       alertAction: ActionCreatorWithPayload<boolean, string>
  //   ) => {
  //       const ONE_MINUTE_MS = 60000;
  //       const now = Date.now();

  //       if (typeof latestValue !== 'undefined') {
  //           const newReading: SensorReading = { value: latestValue, timestamp: now };
  //           const updatedReadings = [...readings, newReading].filter(r => now - r.timestamp < ONE_MINUTE_MS);
  //           setReadings(updatedReadings);

  //           if (updatedReadings.length >= 10) {
  //               const sum = updatedReadings.reduce((acc, curr) => acc + curr.value, 0);
  //               const average = sum / updatedReadings.length;
                
  //               if (average > threshold) {
  //                   if (!lastGasAlertTimestamp || now - lastGasAlertTimestamp > ONE_MINUTE_MS) {
  //                       printDebug(`¡ALERTA DE GAS! Sensor ${alertAction.type.split('/')[1]} supera el umbral de ${threshold} con media de ${average.toFixed(2)}.`);
  //                       dispatch(alertAction(true));
  //                       dispatch(setLastGasAlertTimestamp(now));
  //                   }
  //               }
  //           }
  //       }
  //   };

  //   const setupListeners = async () => {
  //     const db = await getRealtimeDb();
  //     if (!db) {
  //       printDebug("Error: No se pudo conectar a la Realtime Database.");
  //       return;
  //     }

  //     const dataRef = ref(db, 'Averages');
  //     const latestReadingQuery = query(dataRef, limitToLast(1));

  //     try {
  //       const snapshot = await get(latestReadingQuery);
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const readingKey = Object.keys(data)[0];
  //         const initialReading = data[readingKey];
  //         if (initialReading) {
  //           printDebug("Datos iniciales cargados rápidamente.");
  //           setLatestTemperature(initialReading.Temp);
  //           setLatestHumidity(initialReading.Hum);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error en la carga inicial:", error);
  //     }

  //     unsubscribe = onValue(latestReadingQuery, (snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const readingKey = Object.keys(data)[0];
  //         const latestReading = data[readingKey];
          
  //         if (latestReading) {
  //           printDebug("Actualización en tiempo real recibida.");
  //           const now = Date.now();

  //           setLatestTemperature(latestReading.Temp);
  //           setLatestHumidity(latestReading.Hum);
  //           setLatestMq2(latestReading.MQ2);
  //           setLatestMq3(latestReading.MQ3);
  //           setLatestMq7(latestReading.MQ7);
  //           setLatestMq135(latestReading.MQ135);
  //           setLatestMq138(latestReading.MQ138);

  //           if (typeof latestReading.Temp !== 'undefined') {
  //                setLatestTemperature(latestReading.Temp);
  //                const newTempReading: SensorReading = { value: latestReading.Temp, timestamp: now };
  //                const updatedTempReadings = [...temperatureReadings, newTempReading].filter(r => now - r.timestamp < 60000);
  //                setTemperatureReadings(updatedTempReadings);

  //                if (updatedTempReadings.length >= 10) {
  //                   const sum = updatedTempReadings.reduce((acc, curr) => acc + curr.value, 0);
  //                   const average = sum / updatedTempReadings.length;
  //                   printDebug(`Temperatura media del último minuto: ${average.toFixed(2)}°C`);

  //                   if (average >= 26) {
  //                     if (!lastAlertTimestamp || now - lastAlertTimestamp > 60000) {
  //                         printDebug("¡ALERTA! La temperatura supera los 26°C. Se activará un aviso especial.");
  //                         dispatch(setHighTemperatureAlert(true));
  //                         dispatch(setLastAlertTimestamp(now));
  //                     }
  //                   }
  //                }
  //           }

  //           if (typeof latestReading.Hum !== 'undefined') {
  //               setLatestHumidity(latestReading.Hum);
  //               const newHumidityReading: SensorReading = { value: latestReading.Hum, timestamp: now };
  //               const FIVE_MINUTES_MS = 60000;
  //               const updatedHumidityReadings = [...humidityReadings, newHumidityReading].filter(r => now - r.timestamp < FIVE_MINUTES_MS);
  //               setHumidityReadings(updatedHumidityReadings);

  //               if (updatedHumidityReadings.length >= 10) {
  //                   const sum = updatedHumidityReadings.reduce((acc, curr) => acc + curr.value, 0);
  //                   const average = sum / updatedHumidityReadings.length;
  //                   printDebug(`Humedad media de los últimos 5 minutos: ${average.toFixed(2)}%`);
                    
  //                   if (!lastHumidityAlertTimestamp || now - lastHumidityAlertTimestamp > FIVE_MINUTES_MS) {
  //                       if (average > 50) {
  //                           printDebug("¡ALERTA! La humedad es demasiado alta (> 75%).");
  //                           dispatch(setHighHumidityAlert(true));
  //                           dispatch(setLastHumidityAlertTimestamp(now));
  //                       } else if (average < 30) {
  //                           printDebug("¡ALERTA! La humedad es demasiado baja (< 30%).");
  //                           dispatch(setLowHumidityAlert(true));
  //                           dispatch(setLastHumidityAlertTimestamp(now));
  //                       }
  //                   }
  //               }

  //               processGasSensor(latestReading.MQ2, mq2Readings, setMq2Readings, 2000, setMq2Alert);
  //               processGasSensor(latestReading.MQ3, mq3Readings, setMq3Readings, 800, setMq3Alert);
  //               processGasSensor(latestReading.MQ7, mq7Readings, setMq7Readings, 400, setMq7Alert);
  //               processGasSensor(latestReading.MQ135, mq135Readings, setMq135Readings, 500, setMq135Alert);
  //               processGasSensor(latestReading.MQ138, mq138Readings, setMq138Readings, 1000, setMq138Alert);

  //           }
  //         }
  //       }
  //     });
  //   };

  //   setupListeners();

  //   return () => {
  //     if (unsubscribe) {
  //       printDebug("Deteniendo el escuchador de tiempo real.");
  //       unsubscribe();
  //     }
  //   };
  // }, [
  //   getRealtimeDb, 
  //   lastAlertTimestamp, 
  //   lastHumidityAlertTimestamp, 
  //   lastGasAlertTimestamp, 
  //   dispatch, 
  //   temperatureReadings, 
  //   humidityReadings,
  //   mq2Readings,
  //   mq3Readings,
  //   mq7Readings,
  //   mq135Readings,
  //   mq138Readings
  // ]);

  useEffect(() => {
    let unsubscribe: () => void;

    const setupListeners = async () => {
      const db = await getRealtimeDb();
      if (!db) {
        printDebug("Error: No se pudo conectar a la Realtime Database.");
        return;
      }

      const dataRef = ref(db, 'Averages');
      const latestReadingQuery = query(dataRef, limitToLast(1));

      // Carga rápida de datos iniciales (opcional pero recomendable)
      try {
        const snapshot = await get(latestReadingQuery);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const readingKey = Object.keys(data)[0];
          const initialReading = data[readingKey];
          if (initialReading) {
            setLatestTemperature(initialReading.Temp);
            setLatestHumidity(initialReading.Hum);
            setLatestMq2(initialReading.MQ2);
            setLatestMq3(initialReading.MQ3);
            setLatestMq7(initialReading.MQ7);
            setLatestMq135(initialReading.MQ135);
            setLatestMq138(initialReading.MQ138);
          }
        }
      } catch (error) {
        console.error("Error en la carga inicial:", error);
      }

      unsubscribe = onValue(latestReadingQuery, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const readingKey = Object.keys(data)[0];
          const latestReading = data[readingKey];
          
          if (latestReading) {
            printDebug("Actualización en tiempo real recibida con alertas.");

            setLatestTemperature(latestReading.Temp);
            setLatestHumidity(latestReading.Hum);
            setLatestMq2(latestReading.MQ2);
            setLatestMq3(latestReading.MQ3);
            setLatestMq7(latestReading.MQ7);
            setLatestMq135(latestReading.MQ135);
            setLatestMq138(latestReading.MQ138);

            const alerts = latestReading.Alertes;
            if (alerts) {
              if (alerts.Temp_Seule || alerts.Temp_Hum) {
                printDebug("¡ALERTA DE TEMPERATURA DETECTADA EN JSON!");
                dispatch(setHighTemperatureAlert(true));
              }
              if (alerts.Hum_Haute) {
                printDebug("¡ALERTA DE HUMEDAD ALTA DETECTADA EN JSON!");
                dispatch(setHighHumidityAlert(true));
              }
              if (alerts.Hum_Basse) {
                printDebug("¡ALERTA DE HUMEDAD BAJA DETECTADA EN JSON!");
                dispatch(setLowHumidityAlert(true));
              }
              if (alerts.MQ2) {
                printDebug("¡ALERTA DE MQ2 DETECTADA EN JSON!");
                dispatch(setMq2Alert(true));
              }
              if (alerts.MQ3) {
                printDebug("¡ALERTA DE MQ3 DETECTADA EN JSON!");
                dispatch(setMq3Alert(true));
              }
              if (alerts.MQ7) {
                printDebug("¡ALERTA DE MQ7 DETECTADA EN JSON!");
                dispatch(setMq7Alert(true));
              }
              if (alerts.MQ135) {
                printDebug("¡ALERTA DE MQ135 DETECTADA EN JSON!");
                dispatch(setMq135Alert(true));
              }
              if (alerts.MQ138) {
                printDebug("¡ALERTA DE MQ138 DETECTADA EN JSON!");
                dispatch(setMq138Alert(true));
              }
            }
          }
        }
      });
    };

    setupListeners();

    return () => {
      if (unsubscribe) {
        printDebug("Deteniendo el escuchador de tiempo real.");
        unsubscribe();
      }
    };
  }, [getRealtimeDb, dispatch]);


  return {
    messages,
    seeCorrectionsEnabled,
    isLoading,
    isSpeechOn,
    latestTemperature,
    latestHumidity,
    latestMq2,
    latestMq3,
    latestMq7,
    latestMq135,
    latestMq138,
    handleOnTouchStartEvent: () => {},
    handleSeeCorrectionsOnTouchEvent,
    setSeeCorretionsEnabled,
  };
};

export default useDialogController;
