import * as types from "./types";
import * as sensorTypes from "../sensors/types";
import { createLogic } from "redux-logic";

const setLightConfigLogic = createLogic({
  type: types.SET_LIGHT_CONFIG,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: sensorTypes.FETCH_SENSOR_DATA,
    failType: types.SET_LIGHT_CONFIG_FAILED,
  },

  process: ({ action, http }) =>
    http
      .post(
        "/api/v1/light",
        { config: action.lightConfig },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => resp.data),
});

export default [setLightConfigLogic];
