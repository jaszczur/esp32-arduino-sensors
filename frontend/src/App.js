import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnvironmentTile from "./tiles/EnvironmentTile";
import LightTile from "./tiles/LightTile";
import TimeTile from "./tiles/TimeTile";
import WaterLevelTile from "./tiles/WaterLevelTile";
import { fetchSensorData } from "./redux/sensors";
import {
  getEnvironmentData,
  getWaterData,
  getLightData,
  getTimeData,
} from "./redux/sensors/selectors";
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
  const environmentData = useSelector(getEnvironmentData);
  const timeData = useSelector(getTimeData);
  const waterData = useSelector(getWaterData);
  const lightData = useSelector(getLightData);

  useEffect(() => {
    dispatch(fetchSensorData());
    const intervalHandle = setInterval(
      () => dispatch(fetchSensorData()),
      10000
    );
    return () => clearInterval(intervalHandle);
  }, [dispatch]);

  return (
    <Main>
      <EnvironmentTile data={environmentData} />
      <TimeTile data={timeData} />
      <WaterLevelTile data={waterData} />
      <LightTile data={lightData} onConfigPressed={setLightAndUpdate} />
    </Main>
  );
}

export default App;
