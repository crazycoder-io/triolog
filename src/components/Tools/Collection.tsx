import React, {useState} from "react";
import {Input} from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import "./style.css";

const Collection = () => {
    const [numbers, setNumbers] = useState([0, 0]);
    const onChange = (index: number, value: string) => {
        const newNumbers = [...numbers];
        newNumbers[index] = value as unknown as number;
        setNumbers(newNumbers);
    };

    return (
        <div className="collection-container">
            <div className="input-list">
                {numbers.map((num, index) => (
                    <>
                        <Input
                            key={index}
                            className="collect-numbers"
                            value={num}
                            id={`collection_number-${index + 1}`}
                            placeholder="0"
                            style={{border: "1px dotted #000"}}
                            onChange={(val: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                if (/^[0-9]+(\.[0-9]+)?$/.test(val.target.value)) {
                                    onChange(index, val.target.value);
                                }
                            }}
                        />
                        {numbers.length > index + 1 && <Add style={{margin: "auto 0"}} />}
                    </>
                ))}
            </div>
            <span className="tool-name">Toplama</span>
        </div>
    );
};

export default Collection;
