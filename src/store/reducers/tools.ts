import {FILL_TOOL_LIST} from "../types";

const INITIAL_STATE = {
    workPlace: [],
    tools: [],
};

export default (state = INITIAL_STATE, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case FILL_TOOL_LIST:
            return {
                ...state,
                tools: payload,
            };
        default:
            return state;
    }
};
