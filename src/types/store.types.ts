export type ToolItem = {
    type: string;
    Component: JSX.Element;
};
export type ListPayload = Array<ToolItem>;

export interface AddToolItem extends ToolItem {
    key?: string;
    offset: {
        x: number;
        y: number;
    };
}

export interface ToolsReducerState {
    toolsReducer: {
        tools: ListPayload;
        workPlace: Array<AddToolItem>;
    };
}

export interface UpdateWorkPlaceState {
    workPlace: Array<AddToolItem>;
}
