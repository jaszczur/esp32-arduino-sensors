import Tile from "../components/Tile";
import React from "react";
import PropTypes from "prop-types";

const LuminescenceTile = ({ value }) => {
  const deviceTime = useMemo(() => new Date(sensors.ts * 1000).toString(), [
    sensors.ts,
  ]);
  return <Tile>Luminescence: {value}</Tile>;
};

LuminescenceTile.propTypes = {};

export default React.memo(LuminescenceTile);
