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
                        <span className="nav-button-text">File</span>
                    </Button>
                    <Button size="small" variant="contained">
                        <span className="nav-button-text">Window</span>
                    </Button>
                    <Button size="small" variant="contained">
                        <span className="nav-button-text">Edit</span>
                    </Button>
                    <Button size="small" variant="contained">
                        <span className="nav-button-text">Navigation</span>
                    </Button>
                </ButtonGroup>
                <Button onClick={() => alert("Run function")}>
                    <PlayArrow className="run-button" />
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
