import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './styles.scss';

export default () => {
    const params = {
        loop: true,
        spaceBetween: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
    }

    const location = () => {
        window.location.href("cn.bing.com")
    }

    return(
        <div style={{margin:"auto",width:"98%"}}>    
            <Swiper {...params}>
                <div className="swiper swiper-1" onClick={location}>#1</div>
                <div className="swiper swiper-2">#2</div>
                <div className="swiper swiper-3">#3</div>
                <div className="swiper swiper-4">#4</div>
                <div className="swiper swiper-5">#5</div>
            </Swiper>
        </div>
    )
}