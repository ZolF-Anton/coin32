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
                //loop={true}
            >
                {screenShots &&
                    screenShots.results.map((shot) => (
                        <SwiperSlide key={shot.id}>
                            <img alt={game.name} src={shot.image} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}
