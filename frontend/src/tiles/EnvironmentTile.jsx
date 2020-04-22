import Box from "../components/Box";
import Tile from "../components/Tile";
import React from "react";
import { perceptionLabels } from "../redux/sensors/types";
import PropTypes from "prop-types";

const EnvironmentTile = ({ data }) => {
  return (
    <Tile>
      <Box>Temperature: {data.temperature} °C</Box>
      <Box>Humidity: {data.humidity} %</Box>
      <Box>Absolute hum.: {data.absHumidity} g/m³</Box>
      <Box>Dew point: {data.dewPoint} °C</Box>
      <Box>Perception: {perceptionLabels[data.perception]}</Box>
    </Tile>
  );
};

EnvironmentTile.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    absHumidity: PropTypes.number.isRequired,
    dewPoint: PropTypes.number.isRequired,
    perception: PropTypes.number.isRequired,
  }),
};

export default React.memo(EnvironmentTile);
