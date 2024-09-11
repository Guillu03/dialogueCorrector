import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UserDBRootState,
  resetUserData,
  setUserDocRef,
} from "../../shared/redux/slices/userDBSlice";
import useFirebaseDBModel from "../../shared/hooks/useFirebaseDBModel";
import { AlexaContext } from "../../App";
import { useGeneratePseudonym } from "../../shared/utils/useGeneratePseudonym";
import { resetOpenAIState } from "../../shared/redux/slices/openAISlice";
import useLanguage from "../../shared/hooks/useLanguage";
import {
  setLanguageKey,
  setLevelKey,
} from "../../shared/redux/slices/languageSlice";

const useStartMenuController = () => {
  const [pseudonym, setPseudonym] = useState<string>();
  const [age, setAge] = useState<number>();
  const [language, setLanguage] = useState<number>();
  const [level, setLevel] = useState<number>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userData = useSelector(
    (state: UserDBRootState) => state.userDBState.userData
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addUserToFirebaseDB } = useFirebaseDBModel();
  const { getLanguageObjectByKey, getLanguageLevelObjectByKey } = useLanguage();

  const { printDebug } = useContext(AlexaContext);

  const handleChangeOnPseudonymInput = (event: any) => {
    console.log("+++ PSEUDONYM Value +++ => " + event.target.value);
    setPseudonym(event.target.value);
  };

  const handleChangeOnAgeInput = (event: any) => {
    setAge(event.target.value);
  };

  const handleChangeOnLanguageInput = (event: any) => {
    console.log("+++ Language Value +++ => " + event.target.value);
    setLanguage(event.target.value);
  };

  const handleChangeOnLevelInput = (event: any) => {
    console.log("+++ Level Value +++ => " + event.target.value);
    setLevel(event.target.value);
  };

  const handleIsStartButtonDisabled = useCallback(() => {
    if (!pseudonym) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [pseudonym]);

  const handleStartButtonClick = async () => {
    setIsLoading(true);
    dispatch(resetUserData());
    dispatch(resetOpenAIState());
    const userPseudonym: string = getUserPseudonym();

    printDebug("+++ Pseudonym => " + pseudonym);
    printDebug("+++ userPseudonym => " + userPseudonym);
    printDebug("+++ userLanguage => " + language);
    printDebug("+++ userLevel => " + level);

    if (userPseudonym && language && level) {
      dispatch(setLanguageKey(language));
      dispatch(setLevelKey(level));

      let userDataUpdated = { ...userData };
      userDataUpdated.pseudonym = userPseudonym;
      userDataUpdated.languageName =
        getLanguageObjectByKey(language)?.name || "";
      userDataUpdated.levelName =
        getLanguageLevelObjectByKey(level)?.name || "";
      userDataUpdated.timestamp = new Date().toLocaleString();

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
    language,
    level,
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleChangeOnAgeInput,
    handleChangeOnLanguageInput,
    handleChangeOnLevelInput,
    handleStartButtonClick,
  };
};

export default useStartMenuController;
