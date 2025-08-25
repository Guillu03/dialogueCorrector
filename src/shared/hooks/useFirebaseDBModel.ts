import { useSelector } from "react-redux";
import { useContext } from "react";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { AlexaContext, FirebaseContext } from "../../App";
import { UserDBRootState } from "../redux/slices/userDBSlice";
import { OpenAIMessageDTO } from "../dtos/OpenAIDTO";
import { UserDTO } from "../dtos/UserDTO";

const useFirebaseDBModel = () => {
  /* Global Variables */
  const userDocRef = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.docRef
  );

  /* App Context Data */
  const { getFirestoreDb } = useContext(FirebaseContext);
  const { printDebug } = useContext(AlexaContext);

  /**
   * Add a new user to the Firebase database
   */
  const addUserToFirebaseDB = async (
    _user: UserDTO
  ): Promise<DocumentReference<DocumentData, DocumentData> | null> => {
    let docRef: DocumentReference<DocumentData, DocumentData> | null = null;

    try {
      const db = await getFirestoreDb(); // Llama a la función de Firestore

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
   * Add a new message to an existing user document in Firebase
   */
  const addUserAndAIMessageToFirebaseDB = async (
    _message: OpenAIMessageDTO
  ) => {
    try {
      const db = await getFirestoreDb();

      if (db && userDocRef) {
        await updateDoc(userDocRef, {
          messages: arrayUnion(_message),
        });
      } else {
        throw new Error(
          `Failed adding message. DETAILS: Could not get database instance or userDocRef is null.`
        );
      }
    } catch (error) {
      throw new Error(
        `Failed adding message to Firebase collection. DETAILS: ${error}`
      );
    }
  };

  return {
    addUserToFirebaseDB,
    addUserAndAIMessageToFirebaseDB,
  };
};

export default useFirebaseDBModel;