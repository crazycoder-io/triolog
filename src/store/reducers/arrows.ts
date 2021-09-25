import {ADD_NEW_ARROW} from "../types";

const INITIAL_STATE = {
    arrows: [],
};

export default (state = INITIAL_STATE, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case ADD_NEW_ARROW:
            return {
                ...state,
                arrows: [...state.arrows, payload],
            };
        default:
            return state;
    }
};
