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
import { useGeneratePseudonym } from "../../shared/utils/useGeneratePseudonym";
import { resetOpenAIState } from "../../shared/redux/slices/openAISlice";
import useLanguage from "../../shared/hooks/useLanguage";
import {
  setLanguageKey,
  setLevel,
  setTopicKey,
} from "../../shared/redux/slices/languageSlice";

const useStartMenuController = () => {
  const [pseudonym, setPseudonym] = useState<string>();
  const [age, setAge] = useState<number>(-1);
  const [selectedLanguage, setSelectedLanguage] = useState<number>(-1);
  const [selectedLevel, setSelectedLevel] = useState<string>("-1");
  const [selectedTopic, setSelectedTopic] = useState<number>(-1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userData = useSelector(
    (state: UserDBRootState) => state.userDBState.userData
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addUserToFirebaseDB } = useFirebaseDBModel();
  const {
    getLanguageObjectByKey,
    getLanguageLevelObjectByKey,
    getLanguageTopicObjectByKey,
  } = useLanguage();

  const { printDebug } = useContext(AlexaContext);

  const handleChangeOnPseudonymInput = (event: any) => {
    console.log("+++ PSEUDONYM Value +++ => " + event.target.value);
    setPseudonym(event.target.value);
  };

  const handleChangeOnAgeInput = (event: any) => {
    console.log("+++ AGE Value +++ => " + event.target.value);
    setAge(event.target.value);
  };

  const handleChangeOnLanguageInput = (event: any) => {
    console.log("+++ Language Value +++ => " + event.target.value);
    setSelectedLanguage(event.target.value);
  };

  const handleChangeOnLevelInput = (event: any) => {
    console.log("+++ Level Value +++ => " + event.target.value);
    setSelectedLevel(event.target.value);
    setSelectedTopic(-1);
  };

  const handleChangeOnTopicInput = (event: any) => {
    console.log("+++ Topic Value +++ => " + event.target.value);
    setSelectedTopic(event.target.value);
  };

  const handleIsStartButtonDisabled = useCallback(() => {
    printDebug("+++ Pseudonym => " + pseudonym);
    printDebug("+++ Age => " + age);
    printDebug("+++ userLanguage => " + selectedLanguage);
    printDebug("+++ userLevel => " + selectedLevel);
    printDebug("+++ userTopic => " + selectedTopic);
    if (
      pseudonym &&
      age > 0 &&
      selectedLanguage >= 0 &&
      selectedLevel !== "-1" &&
      selectedTopic >= 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pseudonym, age, selectedLanguage, selectedLevel, selectedTopic]);

  const handleStartButtonClick = async () => {
    setIsLoading(true);
    dispatch(resetUserData());
    dispatch(resetOpenAIState());
    const userPseudonym: string = getUserPseudonym();

    printDebug("+++ Pseudonym => " + pseudonym);
    printDebug("+++ Age => " + age);
    printDebug("+++ userPseudonym => " + userPseudonym);
    printDebug("+++ userLanguage => " + selectedLanguage);
    printDebug("+++ userLevel => " + selectedLevel);
    printDebug("+++ userTopic => " + selectedTopic);

    if (
      userPseudonym &&
      age &&
      selectedLanguage &&
      selectedLevel &&
      selectedTopic
    ) {
      dispatch(setLanguageKey(selectedLanguage));
      dispatch(setLevel(selectedLevel));
      dispatch(setTopicKey(selectedTopic));

      let userDataUpdated = { ...userData };
      userDataUpdated.pseudonym = userPseudonym;
      userDataUpdated.age = age;
      userDataUpdated.languageName =
        getLanguageObjectByKey(selectedLanguage)?.name || "";
      userDataUpdated.levelName =
        getLanguageLevelObjectByKey(selectedLevel)?.name || "";
      userDataUpdated.topicName =
        getLanguageTopicObjectByKey(selectedLevel, selectedTopic)?.name || "";
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
    } else {
      console.log("Las opciones no se han registrado adecuadamente");
    }
  };

  const getUserPseudonym = useCallback((): string => {
    if (pseudonym) {
      return pseudonym;
    }

    printDebug("+++ inside getUserPseudonym => " + useGeneratePseudonym(4));

    return useGeneratePseudonym(4);
  }, [pseudonym]);

  useEffect(() => {
    handleIsStartButtonDisabled();
  }, [handleIsStartButtonDisabled]);

  return {
    age,
    selectedLanguage,
    selectedLevel,
    selectedTopic,
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleChangeOnAgeInput,
    handleChangeOnLanguageInput,
    handleChangeOnLevelInput,
    handleChangeOnTopicInput,
    handleStartButtonClick,
  };
};

export default useStartMenuController;
