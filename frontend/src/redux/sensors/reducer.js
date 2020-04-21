import * as types from "./types";

const INITIAL_STATE = {
  ts: 0,
  waterLevel: 0,
  luminescence: 0,
  light: false,
  lightConfig: types.lightConfigValueMapping[0],
  temperature: 0,
  humidity: 0,
  absHumidity: 0,
  dewPoint: 0,
  perception: types.perceptionValueMapping[0],
};

const sensorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GOT_SENSOR_DATA:
      return {
        ...state,
        ...action.payload,
        lightConfig: types.lightConfigValueMapping[action.payload.lightConfig],
        perception: types.perceptionValueMapping[action.payload.perception],
      };

    default:
      return state;
  }
};

export default sensorsReducer;
