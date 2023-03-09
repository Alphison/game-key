import style from "./tovar.module.css"

import { tovars } from "../Catalog/Catalog"
import { useParams } from "react-router"

const Tovar = () => {

    const params = useParams()
    const id = params.id
    

    const tovar = tovars.filter((item) => item.id === id)

    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar[0].img} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar[0].name}</h1>
                <p>{tovar[0].text}</p>
                <h2>от {tovar[0].price} ₽</h2>
                <button>ДОБАВИТЬ В КОРЗИНУ</button>
            </div>
        </div>
    )
}

export default Tovar