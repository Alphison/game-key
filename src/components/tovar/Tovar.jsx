import style from "./tovar.module.css"
import tovar from "../../assets/img/tovar.png"

import { tovars } from "../Catalog/Catalog"
import { useState } from "react"
import { useParams } from "react-router"

const Tovar = () => {
    const [data, setData] = useState(tovars)

    const params = useParams()
    const id = params.id

    const tovar = data.filter((item) => item.id == id)

    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar.img} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar.name}</h1>
                <p>{tovar.text}</p>
                <h2>от {tovar.price} ₽</h2>
                <button>ДОБАВИТЬ В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default Tovar