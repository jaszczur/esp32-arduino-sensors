import { combineReducers } from "redux";
import sensorReducer from "./sensors/reducer";
import actuatorReducer from "./actuators/reducer";

const rootReducer = combineReducers({
  sensors: sensorReducer,
  actuators: actuatorReducer,
});

export default rootReducer;
