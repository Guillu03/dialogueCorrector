/************************************************************************************************************
 *                                                                                                          *
 * File: openAISlice.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving user requests during a conversation                                *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OpenAIMessageDTO } from "../../dtos/OpenAIDTO";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface OpenAIRootState {
  openAIState: {
    messages: OpenAIMessageDTO[];
    contextTokensTotal: number;
  };
}

// Interface with the structure of the state to be stored
interface OpenAIState {
  messages: OpenAIMessageDTO[];
  contextTokensTotal: number;
}

// Initialization of state's variables
const initialState: OpenAIState = {
  messages: [],
  contextTokensTotal: 0,
};

/**
 * Reducer with the available actions on the state
 */
export const openAISlice = createSlice({
  name: "openAIState",
  initialState,
  reducers: {
    addMessage: (
      state: OpenAIState,
      action: PayloadAction<OpenAIMessageDTO>
    ) => {
      state.messages.push(action.payload);
    },
    setMessages: (
      state: OpenAIState,
      action: PayloadAction<OpenAIMessageDTO[]>
    ) => {
      state.messages = action.payload;
    },
    resetMessages: (state: OpenAIState) => {
      state.messages = initialState.messages;
    },
    incrementTotalTokensWith: (
      state: OpenAIState,
      action: PayloadAction<number>
    ) => {
      state.contextTokensTotal += action.payload;
    },
    resetTotalTokens: (state: OpenAIState) => {
      state.contextTokensTotal = 0;
    },
    resetOpenAIState: (state: OpenAIState) => {
      state.messages = initialState.messages;
      state.contextTokensTotal = 0;
    },
  },
});

export const {
  addMessage,
  setMessages,
  resetMessages,
  incrementTotalTokensWith,
  resetTotalTokens,
  resetOpenAIState,
} = openAISlice.actions;
export default openAISlice.reducer;
