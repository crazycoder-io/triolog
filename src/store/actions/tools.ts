import {FILL_TOOL_LIST, ADD_TO_WORK_PANEL, MOVE_ITEM_ON_WORK_PANEL} from "../types";
import {ListPayload, AddToolItem} from "../../types/store.types";

export const fillToolList = (payload: ListPayload) => ({
    type: FILL_TOOL_LIST,
    payload,
});

export const addToWorkPanel = (payload: AddToolItem) => ({
    type: ADD_TO_WORK_PANEL,
    payload,
});

export const moveItemOnWorkPanel = (payload: AddToolItem) => ({
    type: MOVE_ITEM_ON_WORK_PANEL,
    payload,
});
