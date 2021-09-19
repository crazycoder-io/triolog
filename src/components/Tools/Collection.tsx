import React, {useState} from "react";
import {Input, Grid} from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const Collection = () => {
    const [numbers, setNumbers] = useState([0, 0]);
    const onChange = (index: number, val: any) => {
        const newNumbers = [...numbers];
        newNumbers[index] = val.target.value;
        setNumbers(newNumbers);
    };

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            {numbers.map((num, index) => (
                <>
                    <Input
                        key={index}
                        id="nums"
                        defaultValue={0}
                        style={{width: "10%", border: "1px dotted #000"}}
                        onChange={(val: any) => onChange(index, val)}
                    />
                    {numbers.length > index + 1 && <Add />}
                </>
            ))}
        </Grid>
    );
};

export default Collection;
