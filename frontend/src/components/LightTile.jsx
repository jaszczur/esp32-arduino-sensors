import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureLights } from "../redux/actuators";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useGenericStyles from "../style";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttons: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const LightTile = () => {
  const dispatch = useDispatch();
  const sensors = useSelector((st) => st.sensors);
  const classes = useStyles();
  const genericStyles = useGenericStyles();
  const deviceTime = useMemo(() => new Date(sensors.ts * 1000).toString(), [
    sensors.ts,
  ]);
  const setLightAndUpdate = (configValue) => {
    dispatch(configureLights(configValue));
  };
  return (
    <Paper className={genericStyles.paper}>
      <Box>Light: {sensors.light ? "ON" : "OFF"}</Box>
      <Box>Configuration: {sensors.lightConfig}</Box>
      <Box>Time: {deviceTime}</Box>
      <Box className={classes.buttons}>
        <Button variant="contained" onClick={() => setLightAndUpdate(0)}>
          Off
        </Button>
        <Button variant="contained" onClick={() => setLightAndUpdate(1)}>
          On
        </Button>
        <Button variant="contained" onClick={() => setLightAndUpdate(2)}>
          Schedule
        </Button>
      </Box>
    </Paper>
  );
};

export default LightTile;
