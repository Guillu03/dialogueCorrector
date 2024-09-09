/************************************************************************************************************
 *                                                                                                          *
 * File: useFirebaseDBModel.tsx                                                                             *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing the content of users from firebase firestore database         *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useSelector } from "react-redux";
import { useContext } from "react";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
  arrayUnion,
} from "firebase/firestore";
import { VoiceRootState } from "../redux/slices/voiceSlice";
import { AlexaContext, FirebaseContext } from "../../App";
import { UserDTO } from "../dtos/UserDTO";
import { UserDBRootState } from "../redux/slices/userDBSlice";
import { OpenAIMessageDTO } from "../dtos/OpenAIDTO";

const useFirebaseDBModel = () => {
  /* Global Variables */
  const userDocRef = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.docRef
  );

  /* App Context Data */
  const { getFirebaseDb } = useContext(FirebaseContext);
  const { printDebug } = useContext(AlexaContext);

  /**
   * Add a new user to the Firebase database
   *
   * @param _user
   */
  const addUserToFirebaseDB = async (
    _user: UserDTO
  ): Promise<DocumentReference<DocumentData, DocumentData> | null> => {
    let docRef: DocumentReference<DocumentData, DocumentData> | null = null;

    try {
      const db = await getFirebaseDb();

      if (db) {
        const usersCollection = collection(db, "users");
        docRef = await addDoc(usersCollection, _user);
      } else {
        throw new Error(
          `Failed adding new user to Firebase collection. DETAILS: Could not get database instance.`
        );
      }
    } catch (error) {
      throw new Error(
        `Failed adding new user to Firebase collection. DETAILS: ${error}`
      );
    }

    return docRef ? docRef : null;
  };

  /**
   * Add a new user to the Firebase database
   *
   * @param _user
   */
  const addUserAndAIMessageToFirebaseDB = async (
    _message: OpenAIMessageDTO
  ) => {
    try {
      const db = await getFirebaseDb();

      if (db && userDocRef) {
        await updateDoc(userDocRef, {
          messages: arrayUnion(_message),
        });
      } else {
        throw new Error(
          `Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: Could not get database instance.`
        );
      }
    } catch (error) {
      throw new Error(
        `Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: ${error}`
      );
    }
  };

  return {
    addUserToFirebaseDB,
    addUserAndAIMessageToFirebaseDB,
  };
};

export default useFirebaseDBModel;
