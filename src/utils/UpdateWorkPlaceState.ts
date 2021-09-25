import {ToolItem, UpdateWorkPlaceState} from "../types/store.types";

export default (state: UpdateWorkPlaceState, payload: ToolItem) => {
    const exceptList = state.workPlace.filter((t: ToolItem) => t.key !== payload.key);
    return [...exceptList, payload];
};
