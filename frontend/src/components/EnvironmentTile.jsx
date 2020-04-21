import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import React from "react";
import useGenericStyles from "../style";
import PropTypes from "prop-types";

const EnvironmentTile = ({ sensors }) => {
  const genericStyles = useGenericStyles();

  return (
    <Paper elevation={5} className={genericStyles.paper}>
      <Box>Temperature: {sensors.temperature}</Box>
      <Box>Humidity: {sensors.humidity}</Box>
      <Box>Absolute hum.: {sensors.absHumidity}</Box>
      <Box>Dew point: {sensors.dewPoint}</Box>
      <Box>Perception: {sensors.perception}</Box>
    </Paper>
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
