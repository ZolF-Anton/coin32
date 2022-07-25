import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function SwiperApp({ game, screenShots }) {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                {screenShots &&
                    screenShots.results.map((shot) => (
                        <SwiperSlide>
                            <img key={shot.id} alt={game.name} src={shot.image} />
                        </SwiperSlide>
                    ))}

                <SwiperSlide>Slide First Blank</SwiperSlide>
                <SwiperSlide>Slide ___</SwiperSlide>
                <SwiperSlide>Slide ___</SwiperSlide>
                <SwiperSlide>Slide Last Blank</SwiperSlide>
            </Swiper>
        </>
    );
}
