// Import React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Import Routes Constants
import routes from "./routes.json";

// Import Components
import MainView from "./components/Main/index";
import WelcomeView from "./components/Welcome/index";
import DebugView from "./components/Debug";

// Import Controller
import useAlexaWrapper from "./shared/hooks/useAlexaWrapper";
import useFirebase from "./api/firebase/useFirebase";
import StartMenuView from "./components/StartMenu";

// Export Context
export const FirebaseContext = React.createContext<any>({});
export const AlexaContext = React.createContext<any>({});

function App() {
  /* Custom hooks */
  const { getFirebaseDb } = useFirebase();
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
        value={{ getFirebaseDb }} // Global functions to all app's components
      >
        <AlexaContext.Provider
          value={{
            debugMessages,
            printDebug,
            sendLogToAlexa,
            sendTextToAlexa,
            resetDebugMessages,
          }} // Global functions to all app's components
        >
          <BrowserRouter basename={routes.BASE_ROUTE}>
            <Routes>
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
            </Routes>
          </BrowserRouter>
        </AlexaContext.Provider>
      </FirebaseContext.Provider>
    </>
  );
}

export default App;
