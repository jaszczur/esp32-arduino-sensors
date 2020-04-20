import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import useGenericStyles from "../style";

const EnvironmentTile = () => {
  const genericStyles = useGenericStyles();
  const sensors = useSelector((st) => st.sensors.data);

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

export default EnvironmentTile;
