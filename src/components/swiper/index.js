import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './styles.scss';

export default () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
    }

    return(
        <div>    
            <Swiper {...params}>
                <div className="swiper swiper-1">#1</div>
                <div className="swiper swiper-2">#2</div>
                <div className="swiper swiper-3">#3</div>
                <div className="swiper swiper-4">#4</div>
                <div className="swiper swiper-5">#5</div>
            </Swiper>
        </div>
    )
}