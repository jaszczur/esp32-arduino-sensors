import React from "react";
import Tile from "../../components/Tile";
import { useSelector } from "react-redux";
import { getWaterData } from "./selectors";

const WaterLevelTile = () => {
  const data = useSelector(getWaterData);
  return <Tile>Water presence: {data.levelPercent} %</Tile>;
};

export default React.memo(WaterLevelTile);
