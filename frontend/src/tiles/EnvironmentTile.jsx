import Box from "../components/Box";
import Tile from "../components/Tile";
import React from "react";
import PropTypes from "prop-types";

const EnvironmentTile = ({ sensors }) => {
  return (
    <Tile>
      <Box>Temperature: {sensors.temperature}</Box>
      <Box>Humidity: {sensors.humidity}</Box>
      <Box>Absolute hum.: {sensors.absHumidity}</Box>
      <Box>Dew point: {sensors.dewPoint}</Box>
      <Box>Perception: {sensors.perception}</Box>
    </Tile>
  );
};

EnvironmentTile.propTypes = {
  sensors: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    absHumidity: PropTypes.number.isRequired,
    dewPoint: PropTypes.number.isRequired,
    perception: PropTypes.string.isRequired,
  }),
};

export default React.memo(EnvironmentTile);
