import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import useGenericStyles from "../style";

const WaterLevelTile = () => {
  const waterLevel = useSelector((st) => st.sensors.waterLevel);
  const genericStyles = useGenericStyles();
  return (
    <Paper className={genericStyles.paper}>Water level: {waterLevel}</Paper>
  );
};

export default WaterLevelTile;
