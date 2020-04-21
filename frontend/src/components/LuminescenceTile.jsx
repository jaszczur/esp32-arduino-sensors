import Paper from "@material-ui/core/Paper";
import React from "react";
import useGenericStyles from "../style";
import PropTypes from "prop-types";

const LuminescenceTile = ({ value }) => {
  const genericStyles = useGenericStyles();
  return <Paper className={genericStyles.paper}>Luminescence: {value}</Paper>;
};

LuminescenceTile.propTypes = {
  value: PropTypes.number.isRequired,
};

export default React.memo(LuminescenceTile);
