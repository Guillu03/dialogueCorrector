/************************************************************************************************************
 *                                                                                                          *
 * File: userDBSlice.tsx                                                                                    *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving user requests during a conversation                                *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDTO } from "../../dtos/UserDTO";
import { QuestionDTO } from "../../dtos/QuestionDTO";
import { OpenAIMessageDTO } from "../../dtos/OpenAIDTO";
import { DocumentData, DocumentReference } from "firebase/firestore";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface UserDBRootState {
  userDBState: {
    userData: UserDTO;
  };
}

// Interface with the structure of the state to be stored
interface UserDBState {
  userData: UserDTO;
}

// Initialization of state's variables
const initialState: UserDBState = {
  userData: {
    docRef: null,
    pseudonym: "",
    userAnswersToInitialQuestionnaire: [],
    messages: [],
    userAnswersToFinalQuestionnaire: [],
    gptAnswersToEmotionalQuestionnaire: [],
    gptAnswersToEmpathyQuestionnaire: [],
    timestamp: "",
  },
};

/**
 * Reducer with the available actions on the state
 */
export const userDBSlice = createSlice({
  name: "userDBState",
  initialState,
  reducers: {
    setUserDocRef: (
      state: UserDBState,
      action: PayloadAction<DocumentReference<
        DocumentData,
        DocumentData
      > | null>
    ) => {
      state.userData.docRef = action.payload;
    },
    setUserPseudonym: (state: UserDBState, action: PayloadAction<string>) => {
      state.userData.pseudonym = action.payload;
    },
    setUserAnswersToInitialQuestionnaire: (
      state: UserDBState,
      action: PayloadAction<QuestionDTO[]>
    ) => {
      state.userData.userAnswersToInitialQuestionnaire = action.payload;
    },
    addMessage: (
      state: UserDBState,
      action: PayloadAction<OpenAIMessageDTO>
    ) => {
      state.userData.messages.push(action.payload);
    },
    setUserAnswersToFinalQuestionnaire: (
      state: UserDBState,
      action: PayloadAction<QuestionDTO[]>
    ) => {
      state.userData.userAnswersToFinalQuestionnaire = action.payload;
    },
    setGPTAnswersToEmotionalQuestionnaire: (
      state: UserDBState,
      action: PayloadAction<QuestionDTO[]>
    ) => {
      state.userData.gptAnswersToEmotionalQuestionnaire = action.payload;
    },
    setGPTAnswersToEmpathyQuestionnaire: (
      state: UserDBState,
      action: PayloadAction<QuestionDTO[]>
    ) => {
      state.userData.gptAnswersToEmpathyQuestionnaire = action.payload;
    },
    setTimestamp: (state: UserDBState, action: PayloadAction<string>) => {
      state.userData.timestamp = action.payload;
    },
    resetUserData: (state: UserDBState) => {
      state.userData = initialState.userData;
    },
  },
});

export const {
  setUserDocRef,
  setUserPseudonym,
  setUserAnswersToInitialQuestionnaire,
  addMessage,
  setUserAnswersToFinalQuestionnaire,
  setTimestamp,
  resetUserData,
} = userDBSlice.actions;
export default userDBSlice.reducer;
