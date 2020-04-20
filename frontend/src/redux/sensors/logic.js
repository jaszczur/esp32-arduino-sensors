import * as types from "./types";
import { createLogic } from "redux-logic";

const fetchSensorsDataLogic = createLogic({
  type: types.FETCH_SENSOR_DATA,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: types.GOT_SENSOR_DATA,
  },

  process: ({ http }) =>
    http.get("/api/v1/sensors").then((resp) => resp.data),
});

export default [fetchSensorsDataLogic];
