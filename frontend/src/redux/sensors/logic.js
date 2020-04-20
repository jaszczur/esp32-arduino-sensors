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
    //   ({
    //   ts: 1587403067,
    //   waterLevel: 165,
    //   luminescence: 2882,
    //   light: true,
    //   lightConfig: 2,
    //   temperature: 24,
    //   humidity: 28,
    //   absHumidity: 6,
    //   dewPoint: 4,
    //   perception: 0,
    // }),
    http.get("/api/v1/sensors").then((resp) => resp.data),
});

export default [fetchSensorsDataLogic];
