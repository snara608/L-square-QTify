import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftIcon } from "./assets/LeftBtn.svg";
import "./CarouselNavigation.css";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <div className="left-nav">
            {!isBeginning && <LeftIcon onClick={() => swiper.slidePrev()} />}
        </div>
    );
}