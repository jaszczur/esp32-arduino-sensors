import * as types from "./types";
import { createLogic } from "redux-logic";
import axios from "axios";

const setLightStateLogic = createLogic({
  type: types.SET_LIGHT_CONFIG,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: types.SET_LIGHT_CONFIG_SUCCESS,
    failType: types.SET_LIGHT_CONFIG_FAILED,
  },

  process: ({ action }) =>
    axios
      .post(
        "/api/v1/light",
        { state: action.state },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => resp.data),
});

export default [setLightStateLogic];
