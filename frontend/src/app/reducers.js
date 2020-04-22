import { combineReducers } from "redux";
import sensorsSlice from "../features/sensor-monitoring/slice";
import lightSlice from "../features/light-control/slice";

const rootReducer = combineReducers({
  sensors: sensorsSlice.reducer,
  lights: lightSlice.reducer,
});

export default rootReducer;
