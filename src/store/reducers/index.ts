import {combineReducers} from "redux";

// Import Reducers
import tools from "./tools";
import logs from "./logPanel";
import arrows from "./arrows";

export default combineReducers({
    toolsReducer: tools,
    logReducer: logs,
    arrowReducer: arrows,
});
