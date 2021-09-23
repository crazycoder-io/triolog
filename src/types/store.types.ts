export type ItemOfToolList = {
    type: string;
    Component: JSX.Element;
};
export type ToolListReducerItem = {
    title: string;
    items: Array<ItemOfToolList>;
};
export type ToolListReducer = Array<ToolListReducerItem>;

export interface WorkSpaceToolItem extends ItemOfToolList {
    key?: string;
}

export type Offset = {
    x: number;
    y: number;
};

export interface ToolItem extends ItemOfToolList {
    key?: string;
    offset: Offset;
}

export interface ToolsReducerState {
    toolsReducer: {
        toolList: ToolListReducer;
        workPlace: Array<ToolItem>;
    };
}

export interface UpdateWorkPlaceState {
    workPlace: Array<ToolItem>;
}
