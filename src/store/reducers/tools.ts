import {FILL_TOOL_LIST, ADD_TO_WORK_PANEL, MOVE_ITEM_ON_WORK_PANEL} from "../types";
import updateWorkPlace from "../../utils/UpdateWorkPlaceState";

const INITIAL_STATE = {
    workPlace: [],
    toolList: [
        {
            title: null,
            items: [],
        },
    ],
};

export default (state = INITIAL_STATE, action: any) => {
    const {payload, type} = action;

    switch (type) {
        case FILL_TOOL_LIST:
            return {
                ...state,
                toolList: payload,
            };
        case ADD_TO_WORK_PANEL:
            return {
                ...state,
                workPlace: [...state.workPlace, payload],
            };
        case MOVE_ITEM_ON_WORK_PANEL:
            return {
                ...state,
                workPlace: updateWorkPlace(state, payload),
            };
        default:
            return state;
    }
};
