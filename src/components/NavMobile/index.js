import React, {useRef, useState} from 'react';
import {useClickAway} from "react-use";
import {Squash as Hamburger} from 'hamburger-react'
import style from "./index.module.css"
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {menuItems} from "../../data/menuItems"
import {Link} from "react-scroll";

const Index = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));
    return (
        <div ref={ref} className={clsx(style.burger)}>
            <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}} className={clsx(style.menuMobile)}>
                        <ul className={style.nav__list}>
                            {
                                menuItems.map(items =>
                                    <Link
                                        className={style.nav__item}
                                        key={items.id}
                                        to={items.route}
                                        offset={-25}
                                        duration={500}

                                    >
                                        <motion.li
                                            onClick={() => {
                                                setOpen()
                                            }
                                            }
                                            // activeClass="active"
                                            key={items.id}
                                            to={items.route}
                                            // spy={true}
                                            // smooth={true}

                                            className={clsx(style.nav_list)}
                                            initial={{scale: 0, opacity: 0}}
                                            animate={{scale: 1, opacity: 1}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + items.id / 10,
                                            }}
                                        >
                                            {items.title}
                                        </motion.li>
                                    </Link>
                                )
                            }
                        </ul>

                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default Index;