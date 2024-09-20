/************************************************************************************************************
 *                                                                                                          *
 * File: languageDBSlice.tsx                                                                                *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving language options                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LanguageDTO } from "../../dtos/LanguageDTO";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface LanguageRootState {
  languageState: {
    languageData: LanguageDTO;
  };
}

// Interface with the structure of the state to be stored
interface LanguageState {
  languageData: LanguageDTO;
}

// Initialization of state's variables
const initialState: LanguageState = {
  languageData: {
    languageKey: 0,
    level: "-1",
    topicKey: 0,
  },
};

/**
 * Reducer with the available actions on the state
 */
export const languageSlice = createSlice({
  name: "languageState",
  initialState,
  reducers: {
    setLanguageKey: (state: LanguageState, action: PayloadAction<number>) => {
      state.languageData.languageKey = action.payload;
    },
    setLevel: (state: LanguageState, action: PayloadAction<string>) => {
      state.languageData.level = action.payload;
    },
    setTopicKey: (state: LanguageState, action: PayloadAction<number>) => {
      state.languageData.topicKey = action.payload;
    },
  },
});

export const { setLanguageKey, setLevel, setTopicKey } = languageSlice.actions;
export default languageSlice.reducer;
