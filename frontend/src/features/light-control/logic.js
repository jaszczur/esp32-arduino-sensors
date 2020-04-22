import sensorsSlice from "../sensor-monitoring/slice";
import slice from "./slice";
import { createLogic } from "redux-logic";

const setLightConfigLogic = createLogic({
  type: slice.actions.configureLights,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: sensorsSlice.actions.fetchSensorData,
  },

  process: ({ action, http }) => {
    if (process.env.NODE_ENV === "production") {
      return http
        .post(
          "/api/v1/light",
          { config: action.payload },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => resp.data);
    } else {
      console.log("Would change light state to ", action.payload);
      return Promise.resolve({});
    }
  },
});

export default [setLightConfigLogic];
