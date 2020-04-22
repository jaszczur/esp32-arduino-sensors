import Tile from "../../components/Tile";
import Box from "../../components/Box";
import React from "react";
import { useSelector } from "react-redux";
import { getTimeData } from "./selectors";

const TimeTile = () => {
  const data = useSelector(getTimeData);
  return (
    <Tile>
      <Box>Device time: {data.formattedTime}</Box>
      <Box>Time difference: {data.timeDiffSec} s</Box>
    </Tile>
  );
};

export default React.memo(TimeTile);
