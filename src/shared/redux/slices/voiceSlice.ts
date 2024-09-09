/************************************************************************************************************
 *                                                                                                          *
 * File: voiceSlice.tsx                                                                                     *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for global storage of the voice API data                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VoiceMsgStatus } from "../../enums/VoiceMsgStatus";
import { VoiceDTO } from "../../dtos/VoiceDTO";
import { VoiceAPIStatus } from "../../enums/VoiceAPIStatus";
import { VoiceMicrophoneStatus } from "../../enums/VoiceMicrophoneStatus";

// Properties of a message sent from the web app to the voice API
export type VoiceMsgProps = {
  body: string;
  status: VoiceMsgStatus;
};

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface VoiceRootState {
  voiceState: {
    data: VoiceDTO;
    voiceAPIStatus: VoiceAPIStatus;
    voiceMicroStatus: VoiceMicrophoneStatus;
    voiceMsgProps: VoiceMsgProps;
    deviceId: string;
    processingUserRequest: boolean;
  };
}

// Interface with the structure of the state to be stored
interface VoiceState {
  data: VoiceDTO;
  voiceAPIStatus: VoiceAPIStatus;
  voiceMicroStatus: VoiceMicrophoneStatus;
  voiceMsgProps: {
    body: string;
    status: VoiceMsgStatus;
  };
  deviceId: string;
  processingUserRequest: boolean;
}

// Initialization of state's variables
const initialState: VoiceState = {
  data: {
    intentType: "",
    userRequest: "",
  },
  voiceAPIStatus: VoiceAPIStatus.LOADING,
  voiceMicroStatus: VoiceMicrophoneStatus.MICROPHONE_CLOSED,
  voiceMsgProps: {
    body: "",
    status: VoiceMsgStatus.NONE,
  },
  deviceId: "1",
  processingUserRequest: false,
};

/**
 * Reducer with the available actions on the state
 */
export const voiceSlice = createSlice({
  name: "voiceState",
  initialState,
  reducers: {
    setVoiceAPIStatus: (
      state: VoiceState,
      action: PayloadAction<VoiceAPIStatus>
    ) => {
      state.voiceAPIStatus = action.payload;
    },
    setVoiceMicroStatus: (
      state: VoiceState,
      action: PayloadAction<VoiceMicrophoneStatus>
    ) => {
      state.voiceMicroStatus = action.payload;
    },
    setVoiceMsgBody: (state: VoiceState, action: PayloadAction<string>) => {
      state.voiceMsgProps.body = action.payload;
    },
    setVoiceMsgStatus: (
      state: VoiceState,
      action: PayloadAction<VoiceMsgStatus>
    ) => {
      state.voiceMsgProps.status = action.payload;
    },
    setDeviceId: (state: VoiceState, action: PayloadAction<string>) => {
      state.deviceId = action.payload;
    },
    setProcessingUserRequest: (
      state: VoiceState,
      action: PayloadAction<boolean>
    ) => {
      state.processingUserRequest = action.payload;
    },
    setUserSpeechData: (state: VoiceState, action: PayloadAction<VoiceDTO>) => {
      state.data = action.payload;
    },
    resetUserSpeechData: (state: VoiceState) => {
      state.data = initialState.data;
    },
  },
});

export const {
  setVoiceAPIStatus,
  setVoiceMicroStatus,
  setVoiceMsgBody,
  setVoiceMsgStatus,
  setDeviceId,
  setProcessingUserRequest,
  setUserSpeechData,
  resetUserSpeechData,
} = voiceSlice.actions;
export default voiceSlice.reducer;
