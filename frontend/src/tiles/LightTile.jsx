import Box from "../components/Box";
import Tile from "../components/Tile";
import Button from "../components/Button";
import React from "react";
import {
  LIGHT_CONFIG_ON,
  LIGHT_CONFIG_OFF,
  LIGHT_CONFIG_SCHEDULE,
  lightConfigLabels,
} from "../redux/actuators/types";
import PropTypes from "prop-types";

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

const LightTile = ({ data, onConfigPressed }) => {
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

LightTile.propTypes = {
  data: PropTypes.shape({
    light: PropTypes.bool.isRequired,
    lightConfig: PropTypes.number.isRequired,
    luminescencePercent: PropTypes.number.isRequired,
  }).isRequired,
  onConfigPressed: PropTypes.func.isRequired,
};

export default React.memo(LightTile);
