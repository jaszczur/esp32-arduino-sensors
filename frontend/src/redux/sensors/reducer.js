import * as types from "./types";
import { DateTime } from "luxon";

const INITIAL_STATE = {
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
};

const sensorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GOT_SENSOR_DATA:
      return {
        ...state,
        ...action.payload,
        ts: DateTime.fromSeconds(action.payload.ts),
        luminescence: action.payload.luminescence / 4096,
        waterLevel: 1.0 - action.payload.waterLevel / 4096,
      };

    default:
      return state;
  }
};

export default sensorsReducer;
