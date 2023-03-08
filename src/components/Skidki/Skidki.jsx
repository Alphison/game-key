import style from "../Catalog/catalog.module.css"
import tovar from "../../assets/img/tovar.png"

const Skidki = () => {
    return (
        <div className={style.catalog}>
            <div className={style.header_catalog}>
                <h1 className={style.h1_catalog}>
                    Скидки
                </h1>
            </div>
            <div className={style.catalog_wrapper}>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <div className={style.prices}>
                        <p className={style.price_old}>от 599 ₽</p>
                        <p className={style.price}>от 599 ₽</p>
                    </div>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <div className={style.prices}>
                        <p className={style.price_old}>от 599 ₽</p>
                        <p className={style.price}>от 599 ₽</p>
                    </div>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <div className={style.prices}>
                        <p className={style.price_old}>от 599 ₽</p>
                        <p className={style.price}>от 599 ₽</p>
                    </div>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <div className={style.prices}>
                        <p className={style.price_old}>от 599 ₽</p>
                        <p className={style.price}>от 599 ₽</p>
                    </div>
                </div>

                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <div className={style.prices}>
                        <p className={style.price_old}>от 599 ₽</p>
                        <p className={style.price}>от 599 ₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skidki