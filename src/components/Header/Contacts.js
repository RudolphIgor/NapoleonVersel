import React from 'react';
import {Link} from "react-router-dom";
import style from './index.module.css'
import {contacts} from "../../data/contacts";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Link className={style.phone} to={`tel:${contacts.phone_number}`}> {contacts.phone_text}</Link>
            <span>{contacts.address}</span>
        </div>
    );
};

export default Contacts;