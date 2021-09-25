import {FILL_TOOL_LIST, ADD_TO_WORK_PANEL, MOVE_ITEM_ON_WORK_PANEL} from "../types";
import {ToolListReducer, ToolItem} from "../../types/store.types";

export const fillToolList = (payload: ToolListReducer) => ({
    type: FILL_TOOL_LIST,
    payload,
});

export const addToWorkPanel = (payload: ToolItem) => ({
    type: ADD_TO_WORK_PANEL,
    payload,
});

export const moveItemOnWorkPanel = (payload: ToolItem) => ({
    type: MOVE_ITEM_ON_WORK_PANEL,
    payload,
});
