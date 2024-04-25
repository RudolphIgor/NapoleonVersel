import React from 'react';
import clsx from "clsx";
import style from './index.module.css'

const Index = () => {
    return (
        <section className={clsx('container', 'section')} id="section3">
            <h2 className={clsx('sectionTitle')}>
                О нас
            </h2>
            <div className={clsx(style.wrapper)}>
                <div className={clsx(style.aboutImage)}>
                    <img className={clsx(style.image)} src="./img/about.jpg" alt="aboutphoto"/>
                    <img className={clsx(style.imageMobile)} src="./img/aboutMobile.jpg" alt="aboutphoto"/>
                </div>
                <div className={clsx(style.textFirst)}>
                    <p>
                        Миссию нашей компании можно выразить простыми и фундаментальными ценностями: честность,
                        ответственность и уважение.
                    </p>
                    <p>
                        Достигаем мы ее через профессионализм в работе и современный подход к выбору напольных
                        покрытий для людей.
                    </p>
                </div>
                <div className={clsx(style.textSecond)}>
                    <h3 className={clsx(style.subTitle)}>
                        история компании
                    </h3>
                    <p>
                        В апреле 2011 года началась история нашей компании. За эти годы мы набрались не просто
                        бизнес опыта, но и многократно увеличили свои навыки в коммуникации с покупателями. Для нас
                        важно выстроить долгосрочные отношения со своими клиентами.
                    </p>
                </div>

                <div className={clsx(style.textThird)}>
                    <h3 className={clsx(style.subTitle)}>
                        почему нам доверяют?
                    </h3>
                    <ul>
                        <li>
                            <span>1. БОЛЬШОЙ ВЫБОР</span> напольных покрытий и сопутствующих товаров.
                        </li>
                        <li>
                            <span>2. ПРЕДЛАГАЕМ</span> лучшие цены и решения , всегда идём на диалог с покупателем.
                        </li>
                        <li>
                            <span>3. ОБЕСПЕЧИВАЕМ</span> напольных покрытий и сопутствующих товаров.
                        </li>
                        <li>
                            <span>4. РАБОТАЕМ</span> и на заказ. Привезём вам даже редкие позиции.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Index;