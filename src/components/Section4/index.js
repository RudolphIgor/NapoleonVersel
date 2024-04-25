import React, {useEffect, useRef} from 'react';
import clsx from "clsx";
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'
import Promotion from "../Promotion";
import style from "./insex.module.css"
import {register} from 'swiper/element/bundle'
import {promotions} from "../../data/promotions";


const Index = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();

        // Object with parameters
        const params = {

            injectStyles: [`
            
            .swiper-wrapper {
                height: 372px;
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
            }
            swiper-slide {
            
            }
            
            `,
            ],


            pagination: true,
            grabCursor: true,
            loop: false,
            // autoplay: {
            //     delay: 2000,
            //     speed: 300,
            // },

            // slidesPerView: "auto",
            // slidesPerGroup: 2,
            // spaceBetween: 40,
            // slidesPerView: 4,
            breakpoints: {
                1200: {
                    spaceBetween: 44,
                    slidesPerView: 4,
                },
                900: {
                    spaceBetween: 44,
                    slidesPerView: 3.5,
                },

                1050: {
                    slidesPerView: 3.2,
                    spaceBetween: 44,
                    // centeredSlides: true
                },
                768: {
                    slidesPerView: 3,
                    // centeredSlides: true,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    // centeredSlides: true
                },
                390: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                330: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section className={clsx('container', 'section')} id="section4">
            <h2 className={clsx('sectionTitle')}>
                акции
            </h2>
            <div className={clsx(style.wrapper)}>
                <swiper-container init="false" ref={swiperRef}
                    // slides-per-view="4"
                    // autoplay="true"
                                  speed="2000"
                                  loop="true"
                    // pagination="true"

                    // space-between="30"
                >
                    {
                        promotions.map(promotionItem => {
                            return (
                                <swiper-slide key={promotionItem.id}>
                                    <Promotion promo={promotionItem}/>
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