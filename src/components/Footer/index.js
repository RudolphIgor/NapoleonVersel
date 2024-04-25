import React from 'react';
import clsx from "clsx";
import style from './index.module.css'
import {ReactComponent as Logo} from '../../img/logo.svg'

import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {Link} from "react-router-dom";

import SocialFooter from "../SocialFooter";
import {contacts} from "../../data/contacts";


const Index = () => {

    const defaultState = {
        center: [53.714198, 91.417450],
        zoom: 16,
    };
    return (
        <footer className={clsx("container", "section")}>
            <div className={clsx(style.wrapper)}>
                <div className={clsx(style.left)}>

                    <div className={clsx(style.logoWripper)}>
                        <Logo className={clsx(style.log)} />
                        <div className={clsx(style.social)}>
                            <SocialFooter/>
                        </div>

                    </div>

                </div>
                <div className={clsx(style.map)}>
                    <YMaps>
                        <Map width={359}  height={177} defaultState={defaultState}>
                            <Placemark geometry={[53.714198, 91.417450]}
                            />
                        </Map>
                    </YMaps>
                </div>
                <div className={clsx(style.contacts)}>
                    <div>
                        <span className={clsx(style.title)}>
                            Адрес:
                        </span>
                        <span className={clsx(style.subtitle)}>
                            {contacts.address}
                        </span>
                    </div>
                    <div>
                    <span className={clsx(style.title)}>
                            Телефон:
                    </span >
                        <Link className={clsx(style.subtitle)} to={`tel:${contacts.phone_number}`}> {contacts.phone_text} </Link>
                    </div>
                    <div>
                    <span className={clsx(style.title)}>
                            E-mail:
                    </span>
                        <Link className={clsx(style.mail)} to={`mailto:${contacts.email}`}>
                            abakan_napoleon@mail.ru
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Index;