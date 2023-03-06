
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import style from "./Slider.module.css"
import Arrow from "../../assets/img/Arrow";

export default function Slider() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className={style.mySwiper}
            >
                <SwiperSlide className={style.slide}>
                    <img src="https://incrussia.ru/wp-content/uploads/2023/02/0.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://brcforum.sitkocdn.ru/monthly_2022_08/Hogwarts_Legacy_Image_1.jpg.25dbea97040dabef77e2ea4bfcb97ca9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_1920xH.jpg" alt="" />
                </SwiperSlide>
                <div className="swiper-button-prev">
                    <Arrow />
                </div>
            </Swiper>
        </>
    )
}

