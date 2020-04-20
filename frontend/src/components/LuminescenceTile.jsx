import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import useGenericStyles from "../style";

const LuminescenceTile = () => {
  const luminescence = useSelector((st) => st.sensors.luminescence);
  const genericStyles = useGenericStyles();
  return (
    <Paper className={genericStyles.paper}>Luminescence: {luminescence}</Paper>
  );
};

export default LuminescenceTile;
