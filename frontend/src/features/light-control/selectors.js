import { createDeepEqualSelector } from "../../utils/reselect";

const extractLightData = (state) => state.lights;

export const getLightData = createDeepEqualSelector(
  extractLightData,
  (lights) => ({
    ...lights,
    luminescencePercent: (lights.luminescence * 100).toFixed(),
  })
);
