import { SET_LIGHT_CONFIG } from "./types";

/**
 * Configure lights.
 * @example
 * configureLights(SCHEDULE);
 *
 * @param {conf} light configuration
 */
export const configureLights = (lightConfig) => ({
  type: SET_LIGHT_CONFIG,
  lightConfig,
});