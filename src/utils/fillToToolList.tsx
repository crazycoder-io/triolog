import React from "react";
import {Collection} from "../components";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import types from "../types/DNDTypes";

const fillToolList = () => {
    return [
        {
            title: "Ortak Araçlar",
            items: [
                {
                    type: types.ARROW_TOOL,
                    Component: <CompareArrowsIcon />,
                },
            ],
        },
        {
            title: "Hesaplama Araçları",
            items: [
                {
                    type: types.COLLECTION_COMPONENT,
                    Component: <Collection />,
                },
            ],
        },
    ];
};

export default fillToolList;
