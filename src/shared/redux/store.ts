/************************************************************************************************************
 *                                                                                                          *
 * File: store.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Redux store created for data global storage                                                 *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import languageSlice from "./slices/languageSlice";
import openAISlice from "./slices/openAISlice";
import userDBSlice from "./slices/userDBSlice";
import voiceSlice from "./slices/voiceSlice";
import { configureStore } from "@reduxjs/toolkit";

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ["userDBState/setUserDocRef"],
    ignoredPaths: ["userDBState.userData.docRef"],
  },
};

/**
 * Redux store with the available reducers
 */
export const store = configureStore({
  reducer: {
    voiceState: voiceSlice,
    openAIState: openAISlice,
    userDBState: userDBSlice,
    languageState: languageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});
