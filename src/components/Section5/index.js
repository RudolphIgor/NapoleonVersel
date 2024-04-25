import React, {useEffect, useRef} from 'react';
import clsx from "clsx";
import style from "./index.module.css";
import {register} from "swiper/element";
import FeedBack from "../FeedBack";
import {feedback} from "../../data/feedback";


const Index = () => {
    const swiperFeedRef = useRef(null);
    useEffect(() => {
        register();

        // Object with parameters
        const params = {
            injectStyles: [`
                .swiper-wrapper {
                    height: 330px;
                }
            
                .swiper-pagination-bullet {
                    width: 18px;
                    height: 18px;
                    background-color: #A19898;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #fff;
                    opacity: 1;
                }`,
            ],

            pagination: true,
            grabCursor: true,
            loop: false,
            // autoplay: {
            //     delay: 2000,
            //     speed: 300,
            // },
            breakpoints: {
                1050: {
                    // spaceBetween: 44,
                    slidesPerView: 3,
                },
                710: {
                    // spaceBetween: 44,
                    slidesPerView: 2,
                },

                320: {
                    // spaceBetween: 44,
                    slidesPerView: 1,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperFeedRef.current, params);

        // initialize swiper
        swiperFeedRef.current.initialize();
    }, []);
    return (
        <section className={clsx('container', 'section')} id="section5">
            <h2 className={clsx('sectionTitle')}>
                отзывы
            </h2>
            <div className={clsx(style.wrapper)}>
                <swiper-container init="false" ref={swiperFeedRef}
                   speed="2000"
                    loop="true"
                >
                    {
                        feedback.map(feedBackItem => {

                            return (
                                <swiper-slide class={clsx(style.slide)} key={feedBackItem.id}>
                                    <FeedBack  feedback={feedBackItem.text}/>
                                </swiper-slide>
                            )

                        })
                    }
                </swiper-container>
            </div>
        </section>
    );
};

export default Index;