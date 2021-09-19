import React from "react";
import {useDrag} from "react-dnd";

const Tool = ({
    item,
    onDrop,
}: {
    item: {key: string; type: string; Component: JSX.Element};
    onDrop: (
        item: {type: string; Component: JSX.Element; key: string},
        offset: {x: number | undefined; y: number | undefined}
    ) => void;
}) => {
    const {type, key, Component} = item;

    const [{isDragging}, dragRef] = useDrag(() => ({
        type: type,
        item: {type, Component, key},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            onDrop(item, {x: monitor.getClientOffset()?.x, y: monitor.getClientOffset()?.y});
        },
    }));

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}>
            {Component && Component}
        </div>
    );
};

export default Tool;
