import React from "react";
import {useDrag} from "react-dnd";

const Tool = ({
    id,
    item,
    onDrop,
    disabled,
    style,
}: {
    id: string;
    item: {key?: string; type: string; Component: JSX.Element};
    onDrop: (item: {type: string; Component: JSX.Element; key?: string}, offset: {x: number; y: number}) => void;
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
