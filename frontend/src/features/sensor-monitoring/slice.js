import { createSlice } from "@reduxjs/toolkit";

const sensorsSlice = createSlice({
  name: "sensors",
  initialState: {
    ts: 0,
    waterLevel: 0,
    temperature: 0,
    humidity: 0,
    absHumidity: 0,
    dewPoint: 0,
    perception: 0,
  },
  reducers: {
    fetchSensorData: (state, action) => state,
    gotSensorData: (state, action) => ({
      ...state,
      ...action.payload,
      waterLevel: 1.0 - action.payload.waterLevel / 4096,
    }),
  },
});

export default sensorsSlice;
export const { fetchSensorData } = sensorsSlice.actions;
