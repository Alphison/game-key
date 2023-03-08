import style from "./catalog.module.css"
import search from "../../assets/img/search.png"
import tovar from "../../assets/img/tovar.png"

const Catalog = () => {
    return (
        <div className={style.catalog}>
            <div className={style.header_catalog}>
                <h1 className={style.h1_catalog}>
                    Каталог
                </h1>
                <div className={style.input}>
                    <input type="text" placeholder="Посик..."/>
                    <div className={style.ikon_search}>
                        <img src={search} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.catalog_wrapper}>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <p className={style.price}>от 599 ₽</p>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <p className={style.price}>от 599 ₽</p>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <p className={style.price}>от 599 ₽</p>
                </div>
                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <p className={style.price}>от 599 ₽</p>
                </div>

                <div className={style.tovar}>
                    <div className={style.img_tovar}>
                        <img src={tovar} alt="" />
                    </div>
                    <p className={style.price}>от 599 ₽</p>
                </div>
            </div>
        </div>
    )
}

export default Catalog