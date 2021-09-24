import {combineReducers} from "redux";

// Import Reducers
import tools from "./tools";
import logs from "./logPanel";

export default combineReducers({
    toolsReducer: tools,
    logReducer: logs,
});
