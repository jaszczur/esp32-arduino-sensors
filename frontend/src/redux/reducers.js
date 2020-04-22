import { combineReducers } from "redux";
import sensorsSlice from "../features/sensor-monitoring/slice";
import actuatorReducer from "./actuators/reducer";

const rootReducer = combineReducers({
  sensors: sensorsSlice.reducer,
  actuators: actuatorReducer,
});

export default rootReducer;
