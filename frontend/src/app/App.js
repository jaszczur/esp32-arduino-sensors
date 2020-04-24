import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LightTiles from "../features/light-control/LightTiles";
import SensorTiles from "../features/sensor-monitoring/SensorTiles";
import { fetchSensorData } from "../features/sensor-monitoring/slice";
import Main from "../components/Main";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSensorData());
    const intervalHandle = setInterval(() => {
      dispatch(fetchSensorData());
    }, 10000);
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
