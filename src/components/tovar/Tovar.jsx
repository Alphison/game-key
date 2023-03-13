import style from "./tovar.module.css"

import { tovars } from "../Catalog/Catalog"
import { useParams } from "react-router"
import { format } from "../basket/basket"

const Tovar = ({setBasket, basket}) => {

    const params = useParams()
    const id = params.id
    

    const tovar = tovars.find((item) => item.id == id)

    const handleSetBasket = ({id, name, img, text, price}) => {
        setBasket(prev => [...prev, {id: id, name:name, img:img, text:text, price:price}])
    }

    const idBasket = basket.find(item => item.id == id)


    return (
        <div className={style.tovar}>
            <div className={style.img_tovar_one}>
                <img src={tovar.img} alt="" />
            </div>
            <div className={style.content_tovar}>
                <h1>{tovar.name}</h1>
                <p>{tovar.text}</p>
                <h2>от {format(tovar.price)} ₽</h2>
                {
                     idBasket ? <p>товар в корзине</p> : (
                        <button onClick={() => handleSetBasket({...tovar[0]})}>ДОБАВИТЬ В КОРЗИНУ</button>
                     )
                }
            </div>
        </div>
    )
}

export default Tovar