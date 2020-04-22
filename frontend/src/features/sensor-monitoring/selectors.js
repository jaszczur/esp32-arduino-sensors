import { createSelector } from "reselect";
import { createDeepEqualSelector } from "../../utils/reselect";
import pick from "lodash/fp/pick";
import { perceptionLabels } from "./types";
import { DateTime } from "luxon";

// Environment
const extractEnvironmentData = (state) =>
  pick(
    ["temperature", "humidity", "absHumidity", "dewPoint", "perception"],
    state.sensors
  );

export const getEnvironmentData = createDeepEqualSelector(
  extractEnvironmentData,
  (sensors) => {
    console.log("rtrastrastiratnrtnar");
    return {
      ...sensors,
      perceptionLabel: perceptionLabels[sensors.perception],
    };
  }
);

// Time
const extractTimeData = (state) => state.sensors.ts;

export const getTimeData = createSelector(extractTimeData, (rawTimestamp) => {
  const ts = DateTime.fromSeconds(rawTimestamp);
  return {
    ts,
    formattedTime: ts.toLocaleString(DateTime.TIME_WITH_SECONDS),
    timeDiffSec: DateTime.local().diff(ts).as("seconds").toFixed(),
  };
});

// Water
const extractWaterData = (state) => state.sensors.waterLevel;
export const getWaterData = createSelector(extractWaterData, (waterLevel) => ({
  levelPercent: (waterLevel * 100).toFixed(),
}));
