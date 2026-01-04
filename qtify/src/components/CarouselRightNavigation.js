import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightIcon } from "./assets/RightBtn.svg";
import "./CarouselNavigation.css";

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);

    return (
        <div className="right-nav">
            {!isEnd && <RightIcon onClick={() => swiper.slideNext()} />}
        </div>
    );
}