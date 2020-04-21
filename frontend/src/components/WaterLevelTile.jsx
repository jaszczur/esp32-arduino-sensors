import Paper from "@material-ui/core/Paper";
import React from "react";
import useGenericStyles from "../style";
import PropTypes from "prop-types";

const WaterLevelTile = ({ value }) => {
  const genericStyles = useGenericStyles();
  return <Paper className={genericStyles.paper}>Water level: {value}</Paper>;
};

WaterLevelTile.propTypes = {
  value: PropTypes.number.isRequired,
};

export default React.memo(WaterLevelTile);
