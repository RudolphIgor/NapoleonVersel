import React from 'react';
import clsx from "clsx";
import style from "./index.module.css"
const Index = (props) => {
    return (
        <div className={clsx(style.wrapper)}>
            {props.feedback}
        </div>
    );
};

export default Index;