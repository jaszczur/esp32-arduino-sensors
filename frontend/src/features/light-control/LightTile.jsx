import Box from "../../components/Box";
import Tile from "../../components/Tile";
import Button from "../../components/Button";
import React, { useCallback } from "react";
import {
  LIGHT_CONFIG_ON,
  LIGHT_CONFIG_OFF,
  LIGHT_CONFIG_SCHEDULE,
  lightConfigLabels,
} from "./types";
import { useSelector, useDispatch } from "react-redux";
import { configureLights } from "./slice";
import { getLightData } from "./selectors";

const LightConfigButton = React.memo(
  ({ targetConfig, currentConfig, onConfigPressed }) => (
    <Button
      primary={currentConfig === targetConfig}
      onClick={() => onConfigPressed(targetConfig)}
    >
      {lightConfigLabels[targetConfig]}
    </Button>
  )
);

const LightTile = () => {
  const dispatch = useDispatch();
  const onConfigPressed = useCallback(
    (configValue) => {
      dispatch(configureLights(configValue));
    },
    [dispatch]
  );
  const data = useSelector(getLightData);
  return (
    <Tile>
      <Box>Light: {data.light ? "ON" : "OFF"}</Box>
      <Box>Luminescence: {data.luminescencePercent} %</Box>
      <Box>
        <LightConfigButton
          onConfigPressed={onConfigPressed}
          currentConfig={data.lightConfig}
          targetConfig={LIGHT_CONFIG_ON}
        />
        <LightConfigButton
          onConfigPressed={onConfigPressed}
          currentConfig={data.lightConfig}
          targetConfig={LIGHT_CONFIG_OFF}
        />
        <LightConfigButton
          onConfigPressed={onConfigPressed}
          currentConfig={data.lightConfig}
          targetConfig={LIGHT_CONFIG_SCHEDULE}
        />
      </Box>
    </Tile>
  );
};

export default React.memo(LightTile);
