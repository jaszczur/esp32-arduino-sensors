import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import LightTile from "./LightTile";
import slice from "./slice";
import { getLightData } from "./selectors";

const LightTiles = () => {
  const dispatch = useDispatch();
  const setLightAndUpdate = useCallback(
    (configValue) => {
      dispatch(slice.actions.configureLights(configValue));
    },
    [dispatch]
  );
  const lightData = useSelector(getLightData);
  return (
    <>
      <LightTile data={lightData} onConfigPressed={setLightAndUpdate} />
    </>
  );
};

export default LightTiles;
