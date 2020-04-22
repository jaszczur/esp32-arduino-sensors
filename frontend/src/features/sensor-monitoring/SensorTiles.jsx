import React from "react";
import { useSelector } from "react-redux";
import EnvironmentTile from "./EnvironmentTile";
import TimeTile from "./TimeTile";
import WaterLevelTile from "./WaterLevelTile";
import { getEnvironmentData, getWaterData, getTimeData } from "./selectors";

const SensorTiles = () => {
  const environmentData = useSelector(getEnvironmentData);
  const timeData = useSelector(getTimeData);
  const waterData = useSelector(getWaterData);

  return (
    <>
      <EnvironmentTile data={environmentData} />
      <TimeTile data={timeData} />
      <WaterLevelTile data={waterData} />
    </>
  );
};

export default SensorTiles;
