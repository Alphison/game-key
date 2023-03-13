import style from "../Catalog/catalog.module.css"
import tovar from "../../assets/img/tovar.png"
import { tovars } from "../Catalog/Catalog"
import { useState } from "react"
import { format } from "../basket/basket"

const Skidki = () => {
    const [data, setData] = useState(tovars)

    const dataSale = data.filter((item) => item.sale > 0)  


    return (
        <div className={style.catalog} id={"#skidki"}>
            <div className={style.header_catalog}>
                <h1 className={style.h1_catalog}>
                    Скидки
                </h1>
            </div>
            <div className={style.catalog_wrapper}>
                {
                    dataSale.map((item) => {
                        return (
                            <div className={style.tovar} key={item.id}>
                            <div className={style.img_tovar}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={style.prices}>
                                <p className={style.price_old}>от {format(item.price)} ₽</p>
                                <p className={style.price}>от {format(item.sale)} ₽</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skidki