/************************************************************************************************************
 * *
 * File: environmentSlice.tsx                                                                               *
 * Author: Alejandro Guillén Florián                                                                          *
 * Description: Slice para gestionar los estados relacionados con el entorno del usuario.                   *
 * Version: 1.1 (Simplificado)                                                                              *
 * *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface EnvironmentRootState {
  environmentState: {
    isHighTemperatureAlertActive: boolean;
    isHighHumidityAlertActive: boolean;
    isLowHumidityAlertActive: boolean;
    isMq2AlertActive: boolean;
    isMq3AlertActive: boolean;
    isMq7AlertActive: boolean;
    isMq135AlertActive: boolean;
    isMq138AlertActive: boolean;
  };
}

interface EnvironmentState {
  isHighTemperatureAlertActive: boolean;
  isHighHumidityAlertActive: boolean;
  isLowHumidityAlertActive: boolean;
  isMq2AlertActive: boolean;
  isMq3AlertActive: boolean;
  isMq7AlertActive: boolean;
  isMq135AlertActive: boolean;
  isMq138AlertActive: boolean;
}

const initialState: EnvironmentState = {
  isHighTemperatureAlertActive: false,
  isHighHumidityAlertActive: false,
  isLowHumidityAlertActive: false,
  isMq2AlertActive: false,
  isMq3AlertActive: false,
  isMq7AlertActive: false,
  isMq135AlertActive: false,
  isMq138AlertActive: false,
};

/**
 * Reducer con las acciones disponibles sobre el estado
 */
export const environmentSlice = createSlice({
  name: "environmentState",
  initialState,
  reducers: {
    setHighTemperatureAlert: (
      state: EnvironmentState,
      action: PayloadAction<boolean>
    ) => {
      state.isHighTemperatureAlertActive = action.payload;
    },
    setHighHumidityAlert: (
      state: EnvironmentState,
      action: PayloadAction<boolean>
    ) => {
      state.isHighHumidityAlertActive = action.payload;
    },
    setLowHumidityAlert: (
      state: EnvironmentState,
      action: PayloadAction<boolean>
    ) => {
      state.isLowHumidityAlertActive = action.payload;
    },
    setMq2Alert: (state: EnvironmentState, action: PayloadAction<boolean>) => {
      state.isMq2AlertActive = action.payload;
    },
    setMq3Alert: (state: EnvironmentState, action: PayloadAction<boolean>) => {
      state.isMq3AlertActive = action.payload;
    },
    setMq7Alert: (state: EnvironmentState, action: PayloadAction<boolean>) => {
      state.isMq7AlertActive = action.payload;
    },
    setMq135Alert: (state: EnvironmentState, action: PayloadAction<boolean>) => {
      state.isMq135AlertActive = action.payload;
    },
    setMq138Alert: (state: EnvironmentState, action: PayloadAction<boolean>) => {
      state.isMq138AlertActive = action.payload;
    },
    resetEnvironmentState: (state: EnvironmentState) => {
        return initialState;
    },
  },
});

export const {
  setHighTemperatureAlert,
  setHighHumidityAlert,
  setLowHumidityAlert,
  setMq2Alert,
  setMq3Alert,
  setMq7Alert,
  setMq135Alert,
  setMq138Alert,
  resetEnvironmentState,
} = environmentSlice.actions;

export default environmentSlice.reducer;