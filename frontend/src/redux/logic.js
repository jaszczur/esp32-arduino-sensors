import sensorsLogic from "../features/sensor-monitoring/logic";
import actuatorsLogic from "./actuators/logic";

export default [...sensorsLogic, ...actuatorsLogic];
