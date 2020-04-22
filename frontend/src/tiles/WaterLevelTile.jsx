import React from "react";
import PropTypes from "prop-types";
import Tile from "../components/Tile";

const WaterLevelTile = ({ data }) => {
  return <Tile>Water presence: {data.levelPercent} %</Tile>;
};

WaterLevelTile.propTypes = {
  data: PropTypes.shape({ levelPercent: PropTypes.string.isRequired }),
};

export default React.memo(WaterLevelTile);
