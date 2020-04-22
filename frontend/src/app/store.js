import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import { createLogicMiddleware } from "redux-logic";
import rootLogic from "./logic";
import axios from "axios";

// Dependencies for Logic
const deps = {
  http: axios,
};

// Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);

// Prepare middleware to ensure Redux can use it
const composedMiddleware = composeEnhancers(applyMiddleware(logicMiddleware));

// Create store with reducers and all our Logic
export default createStore(rootReducer, composedMiddleware);
