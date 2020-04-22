import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

const sensorsSlice = createSlice({
  name: "sensors",
  initialState: {
    ts: DateTime.fromSeconds(0),
    waterLevel: 0,
    luminescence: 0,
    light: false,
    lightConfig: 0,
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
      ts: DateTime.fromSeconds(action.payload.ts),
      luminescence: action.payload.luminescence / 4096,
      waterLevel: 1.0 - action.payload.waterLevel / 4096,
    }),
  },
});

export default sensorsSlice;
