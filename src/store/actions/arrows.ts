import {ADD_NEW_ARROW} from "../types";
import {ArrowItem} from "../../types/store.types";

export const addNewArrow = (payload: ArrowItem) => ({
    type: ADD_NEW_ARROW,
    payload,
});
