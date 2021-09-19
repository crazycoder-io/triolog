// Imports: Dependencies
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

// Imports: Redux
import rootReducer from "./reducers";

// Create MiddleWares
const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
