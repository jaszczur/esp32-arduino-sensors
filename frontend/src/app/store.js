import reducer from "./reducers";
import { createLogicMiddleware } from "redux-logic";
import rootLogic from "./logic";
import axios from "axios";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// Dependencies for Logic
const deps = {
  http: axios,
};

// Create middleware
const logicMiddleware = createLogicMiddleware(rootLogic, deps);
const defaultMiddleware = getDefaultMiddleware({
  thunk: false,
});

export default configureStore({
  reducer,
  middleware: [...defaultMiddleware, logicMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});
