import slice from "./slice";
import { createLogic } from "redux-logic";

const fetchSensorsDataLogic = createLogic({
  type: slice.actions.fetchSensorData.toString(),
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: slice.actions.gotSensorData,
  },

  process: ({ http }) =>
    process.env.NODE_ENV === "production"
      ? http.get("/api/v1/sensors").then((resp) => resp.data)
      : {
          ts: new Date().getTime() / 1000,
          waterLevel: 165,
          luminescence: 2882,
          light: true,
          lightConfig: 2,
          temperature: 24,
          humidity: 28,
          absHumidity: 6,
          dewPoint: 4,
          perception: 0,
        },
});

export default [fetchSensorsDataLogic];
