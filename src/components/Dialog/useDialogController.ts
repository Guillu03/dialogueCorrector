/************************************************************************************************************
 *                                                                                                          *
 * File: useDialogController.tsx                                                                            *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing Dialog view                                                   *
 * Version: 1.3 (stable turns, short personal recs, firebase listeners)                                     *
 *                                                                                                          *
 ************************************************************************************************************/
import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
import { LanguageRootState } from "../../shared/redux/slices/languageSlice";
import {
  setHighTemperatureAlert,
  EnvironmentRootState,
  setHighHumidityAlert,
  setLowHumidityAlert,
  setMq2Alert,
  setMq3Alert,
  setMq7Alert,
  setMq135Alert,
  setMq138Alert,
} from "../../shared/redux/slices/environmentSlice";

import { ref, onValue, query, limitToLast, get } from "firebase/database";
import useOpenAPI from "../../api/open-ai/useOpenAI";

type TemperatureReading = {
  value: number;
  timestamp: number;
};

type SensorReading = {
  value: number;
  timestamp: number;
};

const useDialogController = () => {
  // Local UI state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [seeCorrectionsEnabled, setSeeCorretionsEnabled] =
    useState<boolean>(false);

  // Últimos valores de sensores
  const [latestTemperature, setLatestTemperature] = useState<number | null>(null);
  const [latestHumidity, setLatestHumidity] = useState<number | null>(null);
  const [latestMq2, setLatestMq2] = useState<number | null>(null);
  const [latestMq3, setLatestMq3] = useState<number | null>(null);
  const [latestMq7, setLatestMq7] = useState<number | null>(null);
  const [latestMq135, setLatestMq135] = useState<number | null>(null);
  const [latestMq138, setLatestMq138] = useState<number | null>(null);

  // Refs auxiliares
  const lastReadingKeyRef = useRef<string | null>(null);           // Evitar reprocesar misma lectura
  const listenersInitializedRef = useRef(false);                   // Evitar dobles suscripciones
  const recommendingRef = useRef(false);                           // Debounce botón recomendaciones
  const lastProcessedUserRequestRef = useRef<string | null>(null); // Evitar reprocesar el mismo turno

  // Utilidad: forzar respuesta MUY corta y personal (2 frases o ~160 chars)
  const enforceShortPersonal = (text: string) => {
    let t = (text || "").replace(/\s+/g, " ").trim();
    const sentences = t.split(/(?<=[.!?])\s+/u).filter(Boolean);
    if (sentences.length > 2) t = sentences.slice(0, 2).join(" ");
    if (t.length > 160) t = t.slice(0, 157).trim().replace(/[,.!?…]*$/u, "") + ".";
    return t;
  };

  const predefinedEnvironmentComments: Record<string, string> = {
    isHighTemperatureAlertActive:
      "La temperatura en tu entorno es alta. Te recomiendo ventilar la habitación.",
    isLowHumidityAlertActive:
      "La humedad en tu entorno es baja. Podrías considerar usar un humidificador.",
    isHighHumidityAlertActive:
      "La humedad en tu entorno es alta. Es importante ventilar para evitar la proliferación de moho.",
    isMq2AlertActive:
      "Hay una posible presencia de humo o gases combustibles. ¡Revisa tu entorno de inmediato!",
    isMq3AlertActive:
      "Se ha detectado alcohol en el ambiente. Asegúrate de que no haya fugas o derrames.",
    isMq7AlertActive:
      "Hay una alta concentración de monóxido de carbono. ¡Abre las ventanas y busca aire fresco!",
    isMq135AlertActive:
      "Se ha detectado aire contaminado. Es recomendable mejorar la ventilación.",
    isMq138AlertActive:
      "Hay presencia de vapores químicos en el ambiente. Ventila el espacio y evita el contacto con sustancias químicas.",
  };

  const alertReadable: Record<string, string> = {
    isHighTemperatureAlertActive: "temperatura alta",
    isLowHumidityAlertActive: "humedad baja",
    isHighHumidityAlertActive: "humedad alta",
    isMq2AlertActive: "humo o gases combustibles (MQ2)",
    isMq3AlertActive: "alcohol en el aire (MQ3)",
    isMq7AlertActive: "monóxido de carbono elevado (MQ7)",
    isMq135AlertActive: "aire contaminado (VOC, MQ135)",
    isMq138AlertActive: "vapores químicos (MQ138)",
  };

  // Redux selects
  const environmentAlerts = useSelector(
    (state: EnvironmentRootState) => state.environmentState
  );
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

  // Hooks / contexts
  const { askGPT } = useOpenAPI();
  const dispatch = useDispatch();
  const { handleAnswerToGeneralUserInput } = useUserGeneralInput();
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { getRealtimeDb } = useContext(FirebaseContext);
  const { printDebug } = useContext(AlexaContext);

  /** Loading spinner control */
  const showLoadingIcon = useCallback(() => {
    printDebug(`loading() - voiceAPIStatus=${voiceAPIStatus}, processing=${processingUserRequest}`);
    setIsLoading(voiceAPIStatus === VoiceAPIStatus.LOADING || !!processingUserRequest);
  }, [voiceAPIStatus, processingUserRequest, printDebug]);

  /** Speaking flag control */
  const setIsSpeaking = useCallback(() => {
    setIsSpeechOn(voiceMsgProps.status === VoiceMsgStatus.START_SPEECH);
  }, [voiceMsgProps]);

  const handleOnTouchStartEvent = useCallback(() => {
    stopAlexaSpeech();
  }, []);

  const handleSeeCorrectionsOnTouchEvent = useCallback(() => {
    setSeeCorretionsEnabled(true);
  }, []);

  const stopAlexaSpeech = useCallback(() => {
    printDebug("stopAlexaSpeech()");
    // otherInfo "no-reprompt" mantiene sesión sin reprompt
    speechResponseToUserRequest("", "no-reprompt");
    setIsLoading(false);
    setIsSpeechOn(false);
  }, [speechResponseToUserRequest, printDebug]);

  const handleMiEntornoClick = useCallback(async () => {
    printDebug("Botón 'Mi entorno' clicado.");
    setIsLoading(true);
    let responseText = "";
    const activeAlerts: string[] = [];

    for (const key in environmentAlerts) {
      if (
        Object.prototype.hasOwnProperty.call(environmentAlerts, key) &&
        (environmentAlerts as any)[key] === true
      ) {
        activeAlerts.push(key);
      }
    }

    if (activeAlerts.length > 0) {
      responseText = "He detectado lo siguiente en tu entorno: ";
      activeAlerts.forEach((alertKey) => {
        if (predefinedEnvironmentComments[alertKey]) {
          responseText += predefinedEnvironmentComments[alertKey] + " ";
        }
      });
    } else {
      const sensorData = `Temperatura: ${latestTemperature?.toFixed(1) || "N/A"}°C, Humedad: ${
        latestHumidity?.toFixed(1) || "N/A"
      }%, MQ2 (Humo): ${latestMq2 || "N/A"}, MQ3 (Alcohol): ${latestMq3 || "N/A"}, MQ7 (CO): ${
        latestMq7 || "N/A"
      }, MQ135 (Aire): ${latestMq135 || "N/A"}, MQ138 (Químicos): ${latestMq138 || "N/A"}.`;
      const prompt = `Haz un comentario sobre los siguientes datos de sensores ambientales para una habitación, indicando si el ambiente es bueno o si hay algo a mejorar: ${sensorData}. Responde de forma concisa.`;

      try {
        responseText = await askGPT([{ role: "user", content: prompt }]);
      } catch (error) {
        printDebug(`Error al pedir comentario a ChatGPT: ${error}`);
        responseText =
          "No puedo obtener un comentario del entorno en este momento. Por favor, inténtalo de nuevo más tarde.";
      }
    }

    // Cierre para seguir el diálogo
    responseText = responseText.trim().replace(/[.!?]\s*$/u, ".");
    responseText += " ¿Tienes alguna pregunta o quieres que te dé alguna recomendación más?";

    speechResponseToUserRequest(responseText);
    setIsLoading(false);
  }, [
    environmentAlerts,
    predefinedEnvironmentComments,
    latestTemperature,
    latestHumidity,
    latestMq2,
    latestMq3,
    latestMq7,
    latestMq135,
    latestMq138,
    askGPT,
    printDebug,
    speechResponseToUserRequest,
  ]);

  const handleRecomendacionesClick = useCallback(async () => {
    // Debounce: evita reentradas si el usuario pulsa repetido
    if (recommendingRef.current) return;
    recommendingRef.current = true;

    try {
      printDebug("Botón 'Recomendaciones' clicado.");
      setIsLoading(true);

      // 1) Detecta alertas activas (texto legible)
      const activeAlerts: string[] = [];
      for (const key in environmentAlerts) {
        if (
          Object.prototype.hasOwnProperty.call(environmentAlerts, key) &&
          (environmentAlerts as any)[key] === true &&
          alertReadable[key as keyof typeof alertReadable]
        ) {
          activeAlerts.push(alertReadable[key as keyof typeof alertReadable]);
        }
      }

      // 2) Contexto básico actual (por si no hay alertas)
      const sensorData = `Temp: ${latestTemperature?.toFixed(1) || "N/A"}°C, Hum: ${
        latestHumidity?.toFixed(1) || "N/A"
      }%.`;

      // 3) Prompt: SOLO 1 recomendación, corta y personal
      const cierre = " ¿Tienes alguna pregunta o quieres que te dé alguna recomendación más?";
      const baseRules =
        "Da SOLO UNA recomendación, muy breve y directa, en segunda persona (tú). Máximo 2 frases. Sin listas ni introducciones.";

      const prompt = activeAlerts.length
        ? `Alertas activas del usuario: ${activeAlerts.join(
            ", "
          )}. ${baseRules} Adáptala a las alertas detectadas en su habitación.`
        : `Sin alertas. ${sensorData} ${baseRules} Enfócala a mejorar el confort (especialmente temperatura/humedad si procede).`;

      let responseText = "";
      try {
        const ai = await askGPT([{ role: "user", content: prompt }]);
        responseText = enforceShortPersonal(ai);

        const lower = responseText.toLowerCase();
        const hasCierre =
          lower.includes("¿tienes alguna pregunta") ||
          lower.includes("quieres que te dé alguna recomendación más") ||
          lower.includes("quieres que te de alguna recomendación más");
        if (!hasCierre) {
          responseText = responseText.replace(/[.!?]\s*$/u, ".");
          responseText += cierre;
        }
      } catch (err) {
        printDebug(`askGPT error: ${err}`);
        responseText =
          "Abre un poco la ventana para renovar el aire y ajusta el termostato un grado si puedes. ¿Tienes alguna pregunta o quieres que te dé alguna recomendación más?";
      }

      speechResponseToUserRequest(responseText);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        recommendingRef.current = false;
      }, 300);
    }
  }, [
    environmentAlerts,
    latestTemperature,
    latestHumidity,
    askGPT,
    printDebug,
    speechResponseToUserRequest,
  ]);

  /** Loading state watcher */
  useEffect(() => {
    showLoadingIcon();
  }, [showLoadingIcon]);

  /** Speaking watcher */
  useEffect(() => {
    setIsSpeaking();
  }, [setIsSpeaking]);

  /**
   * Voice intents watcher:
   * Procesa cada userRequest exactamente UNA vez y resetea el slice para permitir el siguiente turno.
   */
  useEffect(() => {
    if (intentType !== "conversation-intent" || !userRequest) return;

    // Evita reprocesar el mismo turno si Alexa deja micro abierto o se repite el intent
    if (lastProcessedUserRequestRef.current === userRequest) {
      return;
    }
    lastProcessedUserRequestRef.current = userRequest;

    let cancelled = false;

    (async () => {
      try {
        printDebug(`Voice turn in: "${userRequest}"`);

        if (userRequest.includes("ver correcciones")) {
          setSeeCorretionsEnabled(true);
          // (Opcional) speechResponseToUserRequest("Abro tus correcciones. ¿Algo más?");
        } else if (userRequest.includes("volver a pantalla principal")) {
          // (Opcional) navegación UI + confirmación por voz
          // navigate("/");
          // speechResponseToUserRequest("Volviendo a la pantalla principal. ¿Algo más?");
        } else {
          // Tu manejador debe encargarse de generar respuesta y llamar a speechResponseToUserRequest(...)
          await handleAnswerToGeneralUserInput(userRequest, messages);
        }
      } finally {
        if (!cancelled) {
          // Muy importante: reset para no re-disparar con el mismo intent
          dispatch(resetUserSpeechData());
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [intentType, userRequest, messages, handleAnswerToGeneralUserInput, dispatch, printDebug]);

  /**
   * Firebase Realtime Database listeners
   * - Registramos una sola vez
   * - Cleanup en unmount
   * - Evitamos reprocesar la misma lectura
   * - Dispatch de alertas solo si cambian de inactivo→activo
   */
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    if (listenersInitializedRef.current) {
      printDebug("Listeners ya inicializados. Saltando setup.");
      return;
    }
    listenersInitializedRef.current = true;

    (async () => {
      const db = await getRealtimeDb();
      if (!db) {
        printDebug("Error: No se pudo conectar a la Realtime Database.");
        return;
      }

      const dataRef = ref(db, "Averages");
      const latestReadingQuery = query(dataRef, limitToLast(1));

      // Carga inicial rápida
      try {
        const snapshot = await get(latestReadingQuery);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const readingKey = Object.keys(data)[0];
          const initialReading = data[readingKey];
          if (initialReading) {
            lastReadingKeyRef.current = readingKey;
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
        if (!snapshot.exists()) return;

        const data = snapshot.val();
        const readingKey = Object.keys(data)[0];
        if (!readingKey) return;

        // Evita reprocesar si es la misma clave
        if (lastReadingKeyRef.current === readingKey) {
          return;
        }
        lastReadingKeyRef.current = readingKey;

        const latestReading = data[readingKey];
        if (!latestReading) return;

        setLatestTemperature(latestReading.Temp);
        setLatestHumidity(latestReading.Hum);
        setLatestMq2(latestReading.MQ2);
        setLatestMq3(latestReading.MQ3);
        setLatestMq7(latestReading.MQ7);
        setLatestMq135(latestReading.MQ135);
        setLatestMq138(latestReading.MQ138);

        printDebug("Actualización RTDB recibida (nueva clave). Evaluando alertas…");

        const alerts = latestReading.Alertes;
        if (alerts) {
          // Evita dispatch redundante comparando con el estado actual
          if ((alerts.Temp_eule || alerts.Temp_Hum) && !environmentAlerts.isHighTemperatureAlertActive) {
            dispatch(setHighTemperatureAlert(true));
          }
          if (alerts.Hum_Haute && !environmentAlerts.isHighHumidityAlertActive) {
            dispatch(setHighHumidityAlert(true));
          }
          if (alerts.Hum_Basse && !environmentAlerts.isLowHumidityAlertActive) {
            dispatch(setLowHumidityAlert(true));
          }
          if (alerts.MQ2 && !environmentAlerts.isMq2AlertActive) {
            dispatch(setMq2Alert(true));
          }
          if (alerts.MQ3 && !environmentAlerts.isMq3AlertActive) {
            dispatch(setMq3Alert(true));
          }
          if (alerts.MQ7 && !environmentAlerts.isMq7AlertActive) {
            dispatch(setMq7Alert(true));
          }
          if (alerts.MQ135 && !environmentAlerts.isMq135AlertActive) {
            dispatch(setMq135Alert(true));
          }
          if (alerts.MQ138 && !environmentAlerts.isMq138AlertActive) {
            dispatch(setMq138Alert(true));
          }
        }
      });
    })();

    return () => {
      if (unsubscribe) {
        printDebug("Deteniendo el escuchador de tiempo real.");
        unsubscribe();
      }
      listenersInitializedRef.current = false;
    };
  }, [getRealtimeDb, dispatch, environmentAlerts, printDebug]);

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
    handleOnTouchStartEvent,
    handleSeeCorrectionsOnTouchEvent,
    setSeeCorretionsEnabled,
    handleMiEntornoClick,
    handleRecomendacionesClick,
  };
};

export default useDialogController;
