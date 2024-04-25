import React from 'react';
import style from './index.module.css'
import clsx from "clsx";

const Index = (props) => {
    return (
        <div className={clsx(style.cardBody)}>
            <img className={clsx(style.image)} src={props.promo.image} alt="photo"/>
            <div className={clsx(style.wrapper)}>
                <h4 className={clsx(style.title)}>
                    {props.promo.title}
                </h4>
                <span className={clsx(style.label)}>
                {props.promo.offer}
            </span>
                <p className={clsx(style.text)}>
                    {props.promo.text}
                </p>
            </div>

        </div>
    );
};

export default Index;