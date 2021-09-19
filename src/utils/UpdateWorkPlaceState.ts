import {AddToolItem, UpdateWorkPlaceState} from "../types/store.types";

export default (state: UpdateWorkPlaceState, payload: AddToolItem) => {
    const exceptList = state.workPlace.filter((t: AddToolItem) => t.key !== payload.key);
    return [...exceptList, payload];
};
