import React from "react";
import {Toolbar, AppBar, ButtonGroup, Button} from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayCircleFilled";
import "./style.css";

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense" className="toolbar">
                <ButtonGroup variant="text" aria-label="small outlined button group">
                    <Button size="small" variant="contained">
                        File
                    </Button>
                    <Button size="small" variant="contained">
                        Window
                    </Button>
                    <Button size="small" variant="contained">
                        Edit
                    </Button>
                    <Button size="small" variant="contained">
                        Navigation
                    </Button>
                </ButtonGroup>
                <Button onClick={() => alert("Run function")}>
                    <PlayArrow style={{color: "#FFF"}} />
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
