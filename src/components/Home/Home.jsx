import Catalog from "../Catalog/Catalog";
import Skidki from "../Skidki/Skidki";
import Slider from "../Slider/Slider";
import style from "../Slider/Slider.module.css"
import Subscription from "../Subscription/Subscription";

const Home = () => {
    return (
        <>
            <Slider>
                <div className={style.item}>
                    <img src="https://incrussia.ru/wp-content/uploads/2023/02/0.jpg" alt="" />
                </div>
                <div className={style.item}>
                    <img src="https://brcforum.sitkocdn.ru/monthly_2022_08/Hogwarts_Legacy_Image_1.jpg.25dbea97040dabef77e2ea4bfcb97ca9.jpg" alt="" />
                </div>
                <div className={style.item}>
                    <img src="https://cdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_1920xH.jpg" alt="" />
                </div>
            </Slider>
            <Catalog />
            <Skidki />
            <Subscription />
        </>
    )
}

export default Home