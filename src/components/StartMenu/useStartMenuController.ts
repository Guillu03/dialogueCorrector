import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UserDBRootState,
  resetUserData,
  setUserDocRef,
  setUserLanguage,
  setUserLanguageLevel,
} from "../../shared/redux/slices/userDBSlice";
import useFirebaseDBModel from "../../shared/hooks/useFirebaseDBModel";
import { AlexaContext } from "../../App";
import { useGeneratePseudonym } from "../../shared/utils/useGeneratePseudonym";
import { resetOpenAIState } from "../../shared/redux/slices/openAISlice";
import { LanguageCode } from "../../shared/types/languageCode";

const useStartMenuController = () => {
  const [pseudonym, setPseudonym] = useState<string>();
  const [language, setLanguage] = useState<LanguageCode>();
  const [level, setLevel] = useState<number>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userData = useSelector(
    (state: UserDBRootState) => state.userDBState.userData
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addUserToFirebaseDB } = useFirebaseDBModel();

  const { printDebug } = useContext(AlexaContext);

  const handleChangeOnPseudonymInput = (event: any) => {
    console.log("+++ PSEUDONYM Value +++ => " + event.target.value);
    setPseudonym(event.target.value);
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

    if (userPseudonym && language && level) {
      dispatch(setUserLanguage(language));
      dispatch(setUserLanguageLevel(level));

      let userDataUpdated = { ...userData };
      userDataUpdated.pseudonym = userPseudonym;
      userDataUpdated.language = language;
      userDataUpdated.level = level;
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
    language,
    level,
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleChangeOnLanguageInput,
    handleChangeOnLevelInput,
    handleStartButtonClick,
  };
};

export default useStartMenuController;
