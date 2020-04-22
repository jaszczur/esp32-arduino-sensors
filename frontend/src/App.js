import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import LightTile from "./tiles/LightTile";
import SensorTiles from "./features/sensor-monitoring/SensorTiles";
import sensorsSlice from "./features/sensor-monitoring/slice";
import { getLightData } from "./features/sensor-monitoring/selectors";
import { configureLights } from "./redux/actuators";
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch();
  const setLightAndUpdate = useCallback(
    (configValue) => {
      dispatch(configureLights(configValue));
    },
    [dispatch]
  );
  const lightData = useSelector(getLightData);

  useEffect(() => {
    dispatch(sensorsSlice.actions.fetchSensorData());
    const intervalHandle = setInterval(() => {
      console.log("refreshing data");
      dispatch(sensorsSlice.actions.fetchSensorData());
    }, 10000);
    return () => clearInterval(intervalHandle);
  }, [dispatch]);

  return (
    <Main>
      <SensorTiles />
      <LightTile data={lightData} onConfigPressed={setLightAndUpdate} />
    </Main>
  );
}

export default App;
