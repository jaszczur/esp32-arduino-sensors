import { createSelector } from "reselect";

const extractLightData = (state) => state.lights;

export const getLightData = createSelector(extractLightData, (lights) => ({
  ...lights,
  luminescencePercent: (lights.luminescence * 100).toFixed(),
}));
