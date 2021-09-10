import React from "react";
import "./style.css";

const LogPanel = ({logs}: {logs: Array<{title: string; message: string; time: string}>}) => {
    return (
        <table className="table">
            <thead>
                <tr className="tableHeader">
                    <td className="headerColumn">
                        <span className="headerText">Log Title</span>
                    </td>
                    <td className="headerColumn">
                        <span className="headerText">Log Message</span>
                    </td>
                    <td className="headerColumn">
                        <span className="headerText">Log Time</span>
                    </td>
                </tr>
            </thead>
            <tbody className="tBody">
                <tr className="tableRow">
                    <td className="tableColumn">Project Started</td>
                    <td className="tableColumn">-</td>
                    <td className="tableColumn">{new Date().toUTCString()}</td>
                </tr>
                {logs.map(log => (
                    <tr className="tableRow" key={log.time}>
                        <td className="tableColumn">{log.title}</td>
                        <td className="tableColumn">{log.message}</td>
                        <td className="tableColumn">{log.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LogPanel;
