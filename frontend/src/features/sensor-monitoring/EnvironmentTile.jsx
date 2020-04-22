import Box from "../../components/Box";
import Tile from "../../components/Tile";
import React from "react";
import { perceptionLabels } from "./types";
import { useSelector } from "react-redux";
import { getEnvironmentData } from "./selectors";

const EnvironmentTile = () => {
  const data = useSelector(getEnvironmentData);
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

export default React.memo(EnvironmentTile);
