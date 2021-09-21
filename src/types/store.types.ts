export type ItemOfToolList = {
    type: string;
    Component: JSX.Element;
};
export type UnitOfToolList = {
    title: string;
    items: Array<ItemOfToolList>;
};
export type ToolList = Array<UnitOfToolList>;

export interface ToolItem extends ItemOfToolList {
    key?: string;
    offset: {
        x: number;
        y: number;
    };
}

export interface ToolsReducerState {
    toolsReducer: {
        toolList: ToolList;
        workPlace: Array<ToolItem>;
    };
}

export interface UpdateWorkPlaceState {
    workPlace: Array<ToolItem>;
}
