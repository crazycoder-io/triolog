import React from "react";
import {useDrag} from "react-dnd";

const Tool = ({item, onDrop}: {item: {text: string}; onDrop: (item: {text: string}) => void}) => {
    const {text} = item;
    const [{isDragging}, dragRef] = useDrag(() => ({
        type: item.text,
        item: {text},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            console.log("drop", monitor.getDropResult());
            onDrop(item);
        },
    }));

    return (
        <div ref={dragRef} style={{opacity: isDragging ? 0.5 : 1}}>
            {item.text}
        </div>
    );
};

export default Tool;
