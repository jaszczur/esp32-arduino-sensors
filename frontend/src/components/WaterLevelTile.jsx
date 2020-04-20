import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useSelector } from "react-redux";
import useGenericStyles from "../style";

const WaterLevelTile = () => {
  const waterLevel = useSelector((st) => st.sensors.data.waterLevel);
  const genericStyles = useGenericStyles();
  return (
    <Paper className={genericStyles.paper}>Water level: {waterLevel}</Paper>
  );
};

export default WaterLevelTile;
