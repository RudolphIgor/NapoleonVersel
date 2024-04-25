import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import clsx from "clsx";
import {ReactComponent as IconClose} from "../../img/iconClose.svg";
import {Transition} from "react-transition-group";



const Index = ({children, isOpen, onClose}) => {
    return ReactDOM.createPortal(
        <>
            <Transition in={isOpen} timeout={
                {
                    enter: 300,
                    exit: 300,
                }
            } unmountOnExit={true}>{/*Библиотека позволяющая анимировать все внутреннее.*/}
                {(state) => (
                <div
                    className={clsx(`modal` , `modal--${state}`)}
                    onClick={onClose} //при событии onClick происходит вызов функции в родительском элементе, меняющий состояние окна isOpen
                >
                    <div
                        className={clsx(`modalContent`)}
                        onClick={event => event.stopPropagation()} //установлен для предотвращения закрытия модального окна по щелчку на его контентную часть.
                    >
                        <button className={clsx(`modalCloseButton`)}
                        onClick={onClose}>
                            <IconClose/>
                        </button>
                        {children}
                    </div>
                </div>
            )}
            </Transition>
        </>,
        document.getElementById('modal-root')
    );
};

export default Index;