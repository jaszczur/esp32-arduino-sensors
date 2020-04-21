import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import React, { useMemo } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useGenericStyles from "../style";
import {
  LIGHT_CONFIG_ON,
  LIGHT_CONFIG_OFF,
  LIGHT_CONFIG_SCHEDULE,
} from "../redux/actuators/types";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
  createStyles({
    buttons: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const LightTile = ({ sensors, onConfigPressed }) => {
  const classes = useStyles();
  const genericStyles = useGenericStyles();
  const deviceTime = useMemo(() => new Date(sensors.ts * 1000).toString(), [
    sensors.ts,
  ]);
  return (
    <Paper className={genericStyles.paper}>
      <Box>Light: {sensors.light ? "ON" : "OFF"}</Box>
      <Box>Configuration: {sensors.lightConfig}</Box>
      <Box>Time: {deviceTime}</Box>
      <Box className={classes.buttons}>
        <Button
          variant="contained"
          onClick={() => onConfigPressed(LIGHT_CONFIG_ON)}
        >
          Off
        </Button>
        <Button
          variant="contained"
          onClick={() => onConfigPressed(LIGHT_CONFIG_OFF)}
        >
          On
        </Button>
        <Button
          variant="contained"
          onClick={() => onConfigPressed(LIGHT_CONFIG_SCHEDULE)}
        >
          Schedule
        </Button>
      </Box>
    </Paper>
  );
};

LightTile.propTypes = {
  sensors: PropTypes.shape({
    light: PropTypes.bool.isRequired,
    lightConfig: PropTypes.string.isRequired,
    ts: PropTypes.number.isRequired,
  }).isRequired,
  onConfigPressed: PropTypes.func.isRequired,
};

export default React.memo(LightTile);
