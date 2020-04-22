import * as types from "./types";
import sensorsSlice from "../../features/sensor-monitoring/slice";
import { createLogic } from "redux-logic";

const setLightConfigLogic = createLogic({
  type: types.SET_LIGHT_CONFIG,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: sensorsSlice.actions.fetchSensorData,
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
