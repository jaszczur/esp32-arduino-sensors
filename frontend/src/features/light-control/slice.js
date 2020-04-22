import { createSlice } from "@reduxjs/toolkit";
import sensorsSlice from "../sensor-monitoring/slice";

const lightSlice = createSlice({
  name: "light",
  initialState: {
    light: false,
    lightConfig: 0,
    requestedLightConfig: undefined,
    luminescence: 0,
  },
  reducers: {
    configureLights: (state, action) => {
      state.requestedLightConfig = action.payload;
    },
  },
  extraReducers: {
    [sensorsSlice.actions.gotSensorData]: (state, { payload }) => {
      state.light = payload.light;
      state.lightConfig = payload.lightConfig;
      state.luminescence = payload.luminescence / 4096;
    },
  },
});

export default lightSlice;
