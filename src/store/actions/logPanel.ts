import {ADD_NEW_LOG} from "../types";
import {LogItem} from "../../types/store.types";

export const addNewLog = (payload: LogItem) => ({
    type: ADD_NEW_LOG,
    payload,
});
