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

  process: ({ action, http }) => {
    if (process.env.NODE_ENV === "production") {
      return http
        .post(
          "/api/v1/light",
          { config: action.lightConfig },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => resp.data);
    } else {
      console.log("Would change light state to ", action.lightConfig);
      return Promise.resolve({});
    }
  },
});

export default [setLightConfigLogic];
