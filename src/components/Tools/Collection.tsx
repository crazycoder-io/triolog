import React, {useState} from "react";
import {Input, Grid} from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const Collection = (props: {disabled: boolean | undefined}) => {
    const {disabled = true} = props;
    const [numbers, setNumbers] = useState([0, 0]);

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            {numbers.map((num, index) => (
                <>
                    <Input
                        key={index}
                        id="nums"
                        value={num}
                        disabled={disabled}
                        defaultValue={""}
                        style={{width: "10%", border: "1px dotted #000"}}
                        onChange={val => setNumbers([...numbers, parseFloat(val.target.value)])}
                    />
                    {numbers.length > index + 1 && <Add />}
                </>
            ))}
        </Grid>
    );
};

export default Collection;
