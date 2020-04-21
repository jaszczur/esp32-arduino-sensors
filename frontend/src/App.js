import Box from "@material-ui/core/Box";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnvironmentTile from "./components/EnvironmentTile";
import LightTile from "./components/LightTile";
import LuminescenceTile from "./components/LuminescenceTile";
import WaterLevelTile from "./components/WaterLevelTile";
import { fetchSensorData } from "./redux/sensors";
import { configureLights } from "./redux/actuators";

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
  const sensors = useSelector((st) => st.sensors);

  useEffect(() => {
    dispatch(fetchSensorData());
    const intervalHandle = setInterval(
      () => dispatch(fetchSensorData()),
      10000
    );
    return () => clearInterval(intervalHandle);
  }, [dispatch]);

  const setLightAndUpdate = (configValue) => {
    dispatch(configureLights(configValue));
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Box display="flex" flexWrap="wrap">
        <EnvironmentTile sensors={sensors} />
        <LuminescenceTile value={sensors.luminescence} />
        <WaterLevelTile value={sensors.waterLevel} />
        <LightTile sensors={sensors} onConfigPressed={setLightAndUpdate} />
      </Box>
    </main>
  );
}

export default App;
