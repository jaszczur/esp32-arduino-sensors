import { createSelector } from "reselect";
import pick from "lodash/fp/pick";
import { perceptionLabels } from "./types";
import { DateTime } from "luxon";

// Environment
const extractEnvironmentData = (state) =>
  pick(
    ["temperature", "humidity", "absHumidity", "dewPoint", "perception"],
    state.sensors
  );

export const getEnvironmentData = createSelector(
  extractEnvironmentData,
  (sensors) => ({
    ...sensors,
    perceptionLabel: perceptionLabels[sensors.perception],
  })
);

// Time
const extractTimeData = (state) => pick(["ts"], state.sensors);

export const getTimeData = createSelector(extractTimeData, (sensors) => ({
  formattedTime: sensors.ts.toLocaleString(DateTime.TIME_WITH_SECONDS),
  timeDiffSec: DateTime.local().diff(sensors.ts).as("seconds").toFixed(),
}));

// Water
const extractWaterData = (state) => pick(["waterLevel"], state.sensors);
export const getWaterData = createSelector(extractWaterData, (sensors) => ({
  levelPercent: (sensors.waterLevel * 100).toFixed(),
}));

// Light
const extractLightData = (state) =>
  pick(["luminescence", "light", "lightConfig"], state.sensors);
export const getLightData = createSelector(extractLightData, (sensors) => ({
  ...sensors,
  luminescencePercent: (sensors.luminescence * 100).toFixed(),
}));
