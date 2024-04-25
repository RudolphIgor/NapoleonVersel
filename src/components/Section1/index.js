import React from 'react';
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/element/css/autoplay'
import Slider from "../Slider";
import {sliderArray} from "../../data/sliderArray";
import clsx from "clsx";

const Index = () => {
    return (
        <section className={clsx('section')} id="section1">
            <swiper-container
                slides-per-view="1"
                autoplay="true"
                speed="2000"
                loop="true"
                // space-between="30"
            >
                {sliderArray.map(item => {
                    return (
                        <swiper-slide key={item.id}>
                            <Slider slideArray={item}/>
                        </swiper-slide>
                    )
                })
                }
            </swiper-container>
        </section>
    );
};

export default Index;