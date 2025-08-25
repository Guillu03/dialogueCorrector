/************************************************************************************************************
 * *
 * File: useFirebase.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Hook para inicializar y gestionar las instancias de dos proyectos de Firebase diferentes.   *
 * Version: 3.0 (Final)                                                                                     *
 * *
 ************************************************************************************************************/
import { FirebaseApp, initializeApp, getApp, getApps } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Database, getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useState } from "react";
import userDatabaseConfig from "../../firebase.json"; // Config para usuarios

const useFirebase = () => {
  // Un estado para cada instancia de la app
  const [userApp, setUserApp] = useState<FirebaseApp | null>(null);
  const [sensorApp, setSensorApp] = useState<FirebaseApp | null>(null);

  /**
   * Inicializa ambas aplicaciones de Firebase, evitando duplicados.
   */
  const initFirebaseApps = (): { user: FirebaseApp, sensor: FirebaseApp } => {
    // --- Configuración App 1: Usuarios (desde JSON) ---
    const userConfig = {
      apiKey: userDatabaseConfig.DB_API_KEY,
      authDomain: userDatabaseConfig.DB_AUTH_DOMAIN,
      projectId: userDatabaseConfig.DB_PROJECT_ID,
      storageBucket: userDatabaseConfig.DB_STORAGE_BUCKET,
      messagingSenderId: userDatabaseConfig.DB_MESSAGING_SENDER_ID,
      appId: userDatabaseConfig.DB_APP_ID,
      // databaseURL: userDatabaseConfig.DB_DATABASE_URL,
    };

    // --- Configuración App 2: Sensores ---
    const sensorConfig = {
      apiKey: "AIzaSyBRN3vx4gAKd4qXNE1VQD1Ht_LILh_47UI",
      authDomain: "alexa-sensors-5b561.firebaseapp.com",
      databaseURL: "https://alexa-sensors-5b561-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "alexa-sensors-5b561",
      storageBucket: "alexa-sensors-5b561.appspot.com",
      messagingSenderId: "180971277054",
      appId: "1:180971277054:web:d0e5f55f33bea83ac3b3af",
    };
    
    // Si ya existen apps, las obtenemos. Si no, las inicializamos.
    let initializedUserApp: FirebaseApp;
    let initializedSensorApp: FirebaseApp;
    
    const apps = getApps();
    const defaultApp = apps.find(app => app.name === "[DEFAULT]");
    const secondaryApp = apps.find(app => app.name === "sensorApp");

    if (defaultApp) {
        initializedUserApp = defaultApp;
    } else {
        initializedUserApp = initializeApp(userConfig); // App por defecto
    }

    if (secondaryApp) {
        initializedSensorApp = secondaryApp;
    } else {
        initializedSensorApp = initializeApp(sensorConfig, "sensorApp"); // App secundaria con nombre
    }

    setUserApp(initializedUserApp);
    setSensorApp(initializedSensorApp);
    
    return { user: initializedUserApp, sensor: initializedSensorApp };
  };

  const anonymousSignIn = async (app: FirebaseApp): Promise<boolean> => {
    const auth = getAuth(app);
    try {
      await signInAnonymously(auth);
      return false; // Sin error
    } catch (error) {
      console.error(`Fallo en el inicio de sesión anónimo para ${app.name}: ${error}`);
      return true; // Hay error
    }
  };

  /**
   * Obtiene la instancia de la base de datos Firestore (para usuarios).
   */
  const getFirestoreDb = async (): Promise<Firestore | null> => {
    let app = userApp;
    if (!app) {
      const apps = initFirebaseApps();
      app = apps.user;
    }

    if (app) {
      const loginHasError = await anonymousSignIn(app);
      if (!loginHasError) {
        return getFirestore(app);
      }
    }
    return null;
  };

  /**
   * Obtiene la instancia de la Realtime Database (para sensores).
   */
  const getRealtimeDb = async (): Promise<Database | null> => {
    let app = sensorApp;
    if (!app) {
      const apps = initFirebaseApps();
      app = apps.sensor;
    }
    return app ? getDatabase(app) : null;
  };

  return { getFirestoreDb, getRealtimeDb };
};

export default useFirebase;