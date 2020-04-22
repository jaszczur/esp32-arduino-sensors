import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LightTiles from "../features/light-control/LightTiles";
import SensorTiles from "../features/sensor-monitoring/SensorTiles";
import sensorsSlice from "../features/sensor-monitoring/slice";
import Main from "../components/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sensorsSlice.actions.fetchSensorData());
    const intervalHandle = setInterval(() => {
      dispatch(sensorsSlice.actions.fetchSensorData());
    }, 1000);
    return () => clearInterval(intervalHandle);
  }, [dispatch]);

  return (
    <Main>
      <SensorTiles />
      <LightTiles />
    </Main>
  );
}

export default App;
