import * as types from "./types";

const INITIAL_STATE = {
  data: {
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
  },
};

const sensorsReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case types.GOT_SENSOR_DATA:
      return {
        ...state,
        readings: {
          ...action,
          type: undefined,
          lightConfig: types.lightConfigValues[action.lightConfig],
          perception: types.perceptionValues[action.perception],
        },
      };

    default:
      return state;
  }
};

export default sensorsReducer;
