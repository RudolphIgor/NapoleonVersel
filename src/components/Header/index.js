import React from 'react';
import {ReactComponent as Logo} from './../../img/logo.svg'
import style from "./index.module.css"
import Contacts from "./Contacts";
import Nav from "./Nav";
import {menuItems} from "../../data/menuItems"
import clsx from "clsx";
import NavMobile from "../NavMobile";
import Social from "../Social";


const Index = () => {
        return (
        <header className={style.header__container}>
            {/*<div className={clsx(style.socialWrapper)}>*/}
                <Social />
            {/*</div>*/}



            <Logo className={style.logo} />
            <Contacts/>
            <Nav title={menuItems}/>
            <NavMobile/>
        </header>
    );
};

export default Index;