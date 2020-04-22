import React from "react";
import EnvironmentTile from "./EnvironmentTile";
import TimeTile from "./TimeTile";
import WaterLevelTile from "./WaterLevelTile";

const SensorTiles = () => {
  return (
    <>
      <EnvironmentTile />
      <TimeTile />
      <WaterLevelTile />
    </>
  );
};

export default SensorTiles;
