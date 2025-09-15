import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UserDBRootState,
  resetUserData,
  setUserData,
  setUserDocRef,
} from "../../shared/redux/slices/userDBSlice";
import useFirebaseDBModel from "../../shared/hooks/useFirebaseDBModel";
import { AlexaContext } from "../../App";
import { resetOpenAIState } from "../../shared/redux/slices/openAISlice";
import {
  setLanguageKey,
  setLevel,
  setTopicKey,
} from "../../shared/redux/slices/languageSlice";
import { LevelType } from "../../shared/constants/levels";
import { TopicType } from "../../shared/constants/topics";
import {
  resetUserSpeechData,
  VoiceRootState,
} from "../../shared/redux/slices/voiceSlice";

const useWelcomeController = () => {
  const pseudonym: string = "Anónimo";
  const age: number = 30;
  const selectedLanguage: number = 1; // Idioma español
  const selectedLevel: LevelType = {
    key: "C1",
    name: "Avanzado Alto",
    description:
      "Capacidad de expresarse con fluidez y precisión en temas complejos",
  };
  const selectedTopic: TopicType = {
    key: 0,
    name: "Consejos ambientales",
    description: "Monitorear y responder a alertas de sensores en tiempo real además de aconsejar acciones preventivas",
  };

  //Global variables
  const userData = useSelector(
    (state: UserDBRootState) => state.userDBState.userData
  );
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const userRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.userRequest
  );
  const intentType = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.intentType
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addUserToFirebaseDB } = useFirebaseDBModel();

  const { printDebug } = useContext(AlexaContext);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    // if (intentType === "conversation-intent") {
    //   if (userRequest.includes("comenzar")) {
    //     handleStartButtonClick();
    //   }
    // }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

  const handleStartButtonClick = async () => {
    dispatch(resetUserData());
    dispatch(resetOpenAIState());

    printDebug("+++ Pseudonym => " + pseudonym);
    printDebug("+++ Age => " + age);
    printDebug("+++ userLanguage => " + selectedLanguage);
    printDebug("+++ userLevel => " + selectedLevel.name);
    printDebug("+++ userTopic => " + selectedTopic.name);

    dispatch(setLanguageKey(selectedLanguage));
    dispatch(setLevel(selectedLevel));
    dispatch(setTopicKey(selectedTopic));

    let userDataUpdated = { ...userData };
    userDataUpdated.pseudonym = pseudonym;
    userDataUpdated.age = age;
    userDataUpdated.languageName = "Inglés";
    userDataUpdated.levelName = "Intermedio Alto";
    userDataUpdated.topicName = "Aleatorio";
    userDataUpdated.timestamp = new Date().toLocaleString();

    dispatch(setUserData(userDataUpdated));

    await addUserToFirebaseDB(userDataUpdated)
      .then((docRefId) => {
        printDebug(`Usuario agregado con docRefId: ${docRefId}`);
        dispatch(setUserDocRef(docRefId));
      })
      .catch((error) => {
        printDebug(`Error al agregar el nuevo usuario: ${error}`);
      });

    navigate("/dialog");
  };

  /**
   * Execution of the method on the first rendering and when dependencies upon the handleVoiceAPIRequests function are modified
   */
  useEffect(() => {
    handleStartButtonClick();
    // handleVoiceAPIIntents();
  }, []);
};

export default useWelcomeController;
