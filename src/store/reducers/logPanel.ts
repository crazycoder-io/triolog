import {ADD_NEW_LOG} from "../types";

const INITIAL_STATE = {
    logs: [],
};

export default (state = INITIAL_STATE, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case ADD_NEW_LOG:
            return {
                ...state,
                logs: [...state.logs, payload],
            };
        default:
            return state;
    }
};
