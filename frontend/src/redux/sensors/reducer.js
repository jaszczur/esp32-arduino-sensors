import * as types from "./types";

const INITIAL_STATE = {
  ts: 0,
  waterLevel: 0,
  luminescence: 0,
  light: false,
  lightConfig: types.lightConfigValues[0],
  temperature: 0,
  humidity: 0,
  absHumidity: 0,
  dewPoint: 0,
  perception: types.perceptionValues[0],
};

const sensorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GOT_SENSOR_DATA:
      return {
        ...state,
        ...action.payload,
        lightConfig: types.lightConfigValues[action.payload.lightConfig],
        perception: types.perceptionValues[action.payload.perception],
      };

    default:
      return state;
  }
};

export default sensorsReducer;
