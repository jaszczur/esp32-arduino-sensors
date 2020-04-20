import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EnvironmentTile from "./components/EnvironmentTile";
import LightTile from "./components/LightTile";
import LuminescenceTile from "./components/LuminescenceTile";
import WaterLevelTile from "./components/WaterLevelTile";
import { fetchSensorData } from "./redux/sensors";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: "flex",
    },
    fixedHeight: {
      height: 240,
    },
  })
);

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSensorData());
    const intervalHandle = setInterval(
      () => dispatch(fetchSensorData()),
      10000
    );
    return () => clearInterval(intervalHandle);
  }, [dispatch]);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Box display="flex" flexWrap="wrap">
        <EnvironmentTile />
        <LuminescenceTile />
        <WaterLevelTile />
        <LightTile />
      </Box>
    </main>
  );
}

export default App;
