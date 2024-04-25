import React from 'react';
import clsx from "clsx";
import style from "./index.module.css";

const Index = (props) => {
    return (
        <div className={clsx(style.categoryCard)}>
            <img className={clsx(style.imgCatalog)} src={props.catalogItem.image} alt={props.catalogItem.title}/>
            <span className={clsx(style.cardLabel)}>
                {props.catalogItem.title}
            </span>
        </div>
    );
};

export default Index;