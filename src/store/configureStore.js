import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";
const sagaMiddleware = createMiddleware();
export const store = configureStore({
  reducer: { reducer },
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
