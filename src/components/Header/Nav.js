import React from 'react';
import style from './index.module.css'
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = (props) => {
    return (
        <nav className={clsx(style.nav)}>
            <ul className={style.nav__list}>
                {
                    props.title.map(items =>
                        <Link
                            activeClass="active"
                            key={items.id}
                            to={items.route}
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                            >
                            <li className={style.nav__item} >{items.title}</li>
                        </Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;