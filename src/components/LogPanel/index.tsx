import React from "react";
import "./style.css";

function LogPanel() {
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
                    <td className="tableColumn">Test Log Title</td>
                    <td className="tableColumn">Test Log Message</td>
                    <td className="tableColumn">{new Date().toUTCString()}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default LogPanel;
