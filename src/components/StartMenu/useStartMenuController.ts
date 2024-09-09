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

const useStartMenuController = () => {
  const [pseudonym, setPseudonym] = useState<string>();
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

    if (userPseudonym) {
      let userDataUpdated = { ...userData };
      userDataUpdated.pseudonym = userPseudonym;
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
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleStartButtonClick,
  };
};

export default useStartMenuController;
