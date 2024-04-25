import React from 'react';
import {ReactComponent as ImgWhatsapp} from '../../img/socia/whatsup.svg'
import {ReactComponent as ImgInstagram} from '../../img/socia/insta.svg'
import {ReactComponent as ImgTelegram} from '../../img/socia/telegram.svg'
import {Link} from "react-router-dom";
import style from "./index.module.css";
import {contacts} from "../../data/contacts";
const Index = () => {
    return (

        <div className={style.social}>
            <Link to={contacts.whatsApp} target="_blank" rel="noopener noreferrer">
                <ImgWhatsapp className={style.slink} alt='whatsapp'/>
            </Link>
            <Link to={contacts.instagram} rel="nofollow noopener noreferrer" target="_blank">
                <ImgInstagram className={style.slink} alt='instagram'/>
            </Link>
            <Link to={contacts.telegram} rel="nofollow noopener noreferrer" target="_blank">
                <ImgTelegram className={style.slink} alt='telegram'/>
            </Link>
        </div>
    );
};

export default Index;