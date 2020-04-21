import Tile from "../components/Tile";
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const TimeTile = ({ timestamp }) => {
  const deviceTime = useMemo(() => new Date(timestamp * 1000).toString(), [
    timestamp,
  ]);
  return <Tile>Device time: {deviceTime}</Tile>;
};

TimeTile.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default React.memo(TimeTile);
