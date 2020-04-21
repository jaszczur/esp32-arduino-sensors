import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnvironmentTile from "./tiles/EnvironmentTile";
import LightTile from "./tiles/LightTile";
import TimeTile from "./tiles/TimeTile";
import WaterLevelTile from "./tiles/WaterLevelTile";
import { fetchSensorData } from "./redux/sensors";
import { configureLights } from "./redux/actuators";
import Main from "./components/Main";

function App() {
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
    <Main>
      <EnvironmentTile sensors={sensors} />
      <TimeTile timestamp={sensors.ts} />
      <WaterLevelTile value={sensors.waterLevel} />
      <LightTile sensors={sensors} onConfigPressed={setLightAndUpdate} />
    </Main>
  );
}

export default App;
