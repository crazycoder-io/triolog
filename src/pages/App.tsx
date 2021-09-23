import React, {useEffect, useState} from "react";
import {Grid, List, ListItemText, ListItem} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {SolarSystemLoading} from "react-loadingg";
import firebase from "../firebase";
import {Tool, LogPanel, NavBar} from "../components";
import types from "../types/DNDTypes";
import {Offset, ToolsReducerState, WorkSpaceToolItem} from "../types/store.types";
import {fillToolList, addToWorkPanel, moveItemOnWorkPanel} from "../store/actions/tools";
import {GenerateKey, fillToToolList} from "../utils";
import store from "../store";
import "../styles/App.css";

import Xarrow from "react-xarrows";

const db = firebase.default.firestore();

function App() {
    const dispatch = useDispatch();
    const [subjectList, setSubjectList] = useState<Array<{id: string; subject: string}> | []>([]);
    const [listLoading, setListLoading] = useState<boolean>(false);
    const [logs, setLogs] = useState<Array<{title: string; message: string; time: string}>>([]);
    const [arrows, setArrows] = useState<Array<{start: string; end: string}>>([]);

    const toolsReducer = useSelector((state: ToolsReducerState) => state.toolsReducer);
    const {toolList, workPlace} = toolsReducer;

    const addTool = (item: WorkSpaceToolItem, offset: Offset) => {
        if (item && item.type !== "") {
            if (item.type === types.ARROW_TOOL) {
                const {toolsReducer: toolsProps} = store.getState();
                const {workPlace: designPanel} = toolsProps;
                if ((designPanel as Array<{key: string}>).length >= 1) {
                    const {key: start} = designPanel[0];
                    const {key: end} = designPanel[1];

                    setArrows(prev => [...prev, {start, end}]);
                } else {
                    alert("You do not have enough element to bind!");
                }
            } else {
                const key = GenerateKey();
                dispatch(addToWorkPanel({key, type: item.type, Component: item.Component, offset}));
                setLogs(prev => [
                    ...prev,
                    {title: "New Tool", message: "Added new tool - " + key, time: new Date().toUTCString()},
                ]);
            }
        }
    };

    useEffect(() => {
        dispatch(fillToolList(fillToToolList()));
    }, []);

    const moveTool = (item: WorkSpaceToolItem, offset: Offset) => {
        if (item && item.key !== "") {
            dispatch(moveItemOnWorkPanel({...item, offset}));
            setLogs(prev => [
                ...prev,
                {
                    title: "Move Tool",
                    message: item.key + " moved to X:" + offset.x + " Y:" + offset.y,
                    time: new Date().toUTCString(),
                },
            ]);
        }
    };

    useEffect(() => {
        async function getSubjects() {
            setListLoading(true);
            const subjects = await db.collection("subjects").get();
            subjects.forEach(doc => {
                if (!subjectList.some(d => d.id === doc.id)) {
                    setSubjectList(prev => [...prev, {id: doc.id, subject: doc.data().subject}]);
                }
            });
            setListLoading(false);
        }

        getSubjects();
    }, []);

    return (
        <div className="container">
            {/* <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <Grid container>
                {listLoading ? (
                    <SolarSystemLoading />
                ) : (
                    <>
                        <Grid item xs={12}>
                            <NavBar />
                        </Grid>
                        <Grid container className="workPanel">
                            <Grid item md={2} className="listPanel">
                                <List component="data" aria-label="primary" className="list">
                                    {subjectList.length > 0 &&
                                        subjectList.map(subject => (
                                            <ListItem button key={subject.id} className="list-item">
                                                <ListItemText
                                                    className="list-item-text"
                                                    color="black"
                                                    primary={subject.subject}
                                                />
                                            </ListItem>
                                        ))}
                                </List>
                            </Grid>
                            <Grid item container direction="column" md={8}>
                                <Grid item className="designPanel">
                                    <div className="workField">
                                        {workPlace.map(item => (
                                            <>
                                                <Tool
                                                    id={item.key!}
                                                    key={item.key}
                                                    disabled={false}
                                                    item={item}
                                                    onDrop={moveTool}
                                                    style={{
                                                        position: item.offset.x ? "absolute" : "initial",
                                                        left: item.offset.x ? item.offset.x + "px" : "",
                                                        top: item.offset.y ? item.offset.y + "px" : "",
                                                    }}
                                                />
                                                {arrows.length > 0 &&
                                                    arrows.map(({start, end}, index) => (
                                                        <Xarrow key={index} start={start} end={end} />
                                                    ))}
                                            </>
                                        ))}
                                    </div>
                                </Grid>
                                <Grid item className="logPanel">
                                    <LogPanel logs={logs} />
                                </Grid>
                            </Grid>
                            <Grid item md={2} className="toolPanel">
                                {toolList.map(({items, title}) => (
                                    <>
                                        <span className="tool-title">{title}</span>
                                        <div className="tools">
                                            {items.map(({Component, type}, index) => (
                                                <Tool
                                                    id={index.toString()}
                                                    disabled={true}
                                                    key={index}
                                                    onDrop={addTool}
                                                    item={{type, Component}}
                                                />
                                            ))}
                                        </div>
                                        <hr className="brace" />
                                    </>
                                ))}
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
    );
}

export default App;
