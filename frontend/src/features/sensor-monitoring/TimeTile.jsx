import Tile from "../../components/Tile";
import Box from "../../components/Box";
import React from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

const TimeTile = ({ data }) => {
  return (
    <Tile>
      <Box>Device time: {data.formattedTime}</Box>
      <Box>Time difference: {data.timeDiffSec} s</Box>
    </Tile>
  );
};

TimeTile.propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.instanceOf(DateTime),
    formattedTime: PropTypes.string.isRequired,
    timeDiffSec: PropTypes.string.isRequired,
  }),
};

export default React.memo(TimeTile);
