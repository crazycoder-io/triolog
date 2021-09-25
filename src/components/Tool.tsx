import React from "react";
import {useDrag} from "react-dnd";
import {Offset, WorkSpaceToolItem} from "../types/store.types";

const Tool = ({
    id,
    item,
    onDrop,
    disabled,
    style,
}: {
    id: string;
    item: WorkSpaceToolItem;
    onDrop: (item: WorkSpaceToolItem, offset: Offset) => void;
    disabled: boolean;
    style?: React.CSSProperties;
}) => {
    const {type, Component} = item;

    const [{isDragging}, dragRef] = useDrag(() => ({
        type: type,
        item: {type, Component, key: item.key},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            onDrop(item, {x: monitor.getClientOffset()!.x, y: monitor.getClientOffset()!.y});
        },
    }));

    return (
        <div ref={dragRef} id={id} style={{margin: "10px", opacity: isDragging ? 0.5 : 1, ...style}}>
            <div
                style={{
                    pointerEvents: disabled ? "none" : "all",
                    display: "inline-block",
                }}>
                {Component && Component}
            </div>
        </div>
    );
};

export default Tool;
