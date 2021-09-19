import React from "react";
import {useDrag} from "react-dnd";

const Tool = ({
    item,
    onDrop,
    disabled,
}: {
    item: {key?: string; type: string; Component: JSX.Element};
    onDrop: (item: {type: string; Component: JSX.Element; key?: string}, offset: {x: number; y: number}) => void;
    disabled: boolean;
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
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}>
            <div style={{pointerEvents: disabled ? "none" : "all"}}>{Component && Component}</div>
        </div>
    );
};

export default Tool;
