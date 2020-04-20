import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import useGenericStyles from "../style";

const LuminescenceTile = () => {
  const luminescence = useSelector((st) => st.sensors.data.luminescence);
  const genericStyles = useGenericStyles();
  return (
    <Paper className={genericStyles.paper}>Luminescence: {luminescence}</Paper>
  );
};

export default LuminescenceTile;
