// Import React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Import Routes Constants
import routes from "./routes.json";

// Import Components
import MainView from "./components/Main/index";
import WelcomeView from "./components/Welcome/index";
import DebugView from "./components/Debug";
// import StartMenuView from "./components/StartMenu";

// Import Controller
import useAlexaWrapper from "./shared/hooks/useAlexaWrapper";
import useFirebase from "./api/firebase/useFirebase";

// Export Context
export const FirebaseContext = React.createContext<any>({});
export const AlexaContext = React.createContext<any>({});

function App() {
  /* Custom hooks */
  const { getFirestoreDb, getRealtimeDb } = useFirebase(); // Obtenemos las dos funciones
  const {
    debugMessages,
    printDebug,
    sendLogToAlexa,
    sendTextToAlexa,
    resetDebugMessages,
  } = useAlexaWrapper();

  return (
    <>
      <FirebaseContext.Provider
        // Pasamos ambas funciones en el value del provider
        value={{ getFirestoreDb, getRealtimeDb }} 
      >
        <AlexaContext.Provider
          value={{
            debugMessages,
            printDebug,
            sendLogToAlexa,
            sendTextToAlexa,
            resetDebugMessages,
          }}
        >
          <BrowserRouter basename={routes.BASE_ROUTE}>
            {/* <Routes>
              <Route path={routes.START_APP_ROUTE} element={<WelcomeView />} />
              <Route
                path={routes.START_MENU_ROUTE}
                element={<StartMenuView />}
              />
              <Route path={routes.DIALOG_ROUTE} element={<MainView />} />
              <Route
                path={routes.DEBUG_ROUTE}
                element={<DebugView msg={debugMessages} />}
              />
            </Routes> */}
            <Routes>
              <Route path={routes.START_APP_ROUTE} element={<MainView />} />
              <Route path={routes.START_MENU_ROUTE} element={<MainView />} />
              <Route path={routes.DIALOG_ROUTE} element={<MainView />} />
              <Route
                path={routes.DEBUG_ROUTE}
                element={<DebugView msg={debugMessages} />}
              />
            </Routes>
          </BrowserRouter>
        </AlexaContext.Provider>
      </FirebaseContext.Provider>
    </>
  );
}

export default App;