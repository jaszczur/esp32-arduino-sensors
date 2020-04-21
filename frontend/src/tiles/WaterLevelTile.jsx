import React from "react";
import PropTypes from "prop-types";
import Tile from "../components/Tile";

const WaterLevelTile = ({ value }) => {
  return <Tile>Water presence: {(value * 100).toFixed()} %</Tile>;
};

WaterLevelTile.propTypes = {
  value: PropTypes.number.isRequired,
};

export default React.memo(WaterLevelTile);
