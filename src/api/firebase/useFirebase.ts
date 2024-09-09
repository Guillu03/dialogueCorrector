/************************************************************************************************************
 *                                                                                                          *
 * File: useFirebase.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used in the creation and initialization of the Firebase Firestore               *
 *  database instance with the Spark Plan                                                                   *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useState } from "react";
import databaseConfig from "../../firebase.json";

const useFirebase = () => {
  /* Local Variables */
  const [firebaseInstance, setFirebaseInstance] = useState<FirebaseApp | null>(
    null
  );

  /**
   * Initialize Firebase
   *
   * @returns FirebaseApp or null
   */
  const initFirebaseApp = (): FirebaseApp | null => {
    // Web app's Firebase configuration
    const firebaseConfig = {
      apiKey: databaseConfig.DB_API_KEY,
      authDomain: databaseConfig.DB_AUTH_DOMAIN,
      projectId: databaseConfig.DB_PROJECT_ID,
      storageBucket: databaseConfig.DB_STORAGE_BUCKET,
      messagingSenderId: databaseConfig.DB_MESSAGING_SENDER_ID,
      appId: databaseConfig.DB_APP_ID,
    };

    const app = initializeApp(firebaseConfig);

    if (app) {
      setFirebaseInstance(app);
      return app;
    }
    return null;
  };

  /**
   * Enable anonymous sign in to Firebase
   *
   * @returns boolean
   */
  const anonymousSignIn = async (): Promise<boolean> => {
    const auth = getAuth();

    try {
      const result = await signInAnonymously(auth);

      if (result) {
        return false;
      }

      return true;
    } catch (error) {
      throw new Error(`Anonymously sign in failed. DETAILS: ${error}.`);
    }
  };

  /**
   * Get the Firebase created instance
   *
   * @returns Firestore or null
   */
  const getFirebaseDb = async (): Promise<Firestore | null> => {
    let db: Firestore | null = null;

    if (!firebaseInstance) {
      const appInstance = initFirebaseApp();

      if (appInstance) {
        const isError = await anonymousSignIn();

        if (!isError) {
          // Retrives Firestore's database instance
          db = getFirestore(appInstance);
        }
      }
    } else {
      // Retrives Firestore's database instance
      db = getFirestore(firebaseInstance);
    }

    return db;
  };

  return { getFirebaseDb };
};

export default useFirebase;
