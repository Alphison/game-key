import style from "./basket.module.css"
import tovar from "../../assets/img/tovar.png"

const Basket = ({activeModal, setActive}) => {

    return (
        <div className={activeModal ? style.basket + ' ' + style.active : style.basket} onClick={() => setActive(false)}>
            <div className={activeModal ? style.basket_inner + ' ' + style.active : style.basket_inner} onClick={(e) => e.stopPropagation()}>
                <h1>Корзина</h1>
                <div className={style.basket_tovars}>
                    <div className={style.basket_tovar}>
                        <div className={style.img_tovar_basket}>
                            <img src={tovar} alt="" />
                        </div>
                        <div className={style.content_basket_tovar}>
                            <p>Название</p>
                            <p>от 399 ₽</p>
                            <button>Удалить</button>
                        </div>
                    </div>
                    <p className={style.basket_price}>Итого: <span>100000 ₽</span></p>
                </div>
                <button className={style.basket_btn}>КУПИТЬ</button>
            </div>
        </div>
    )
}

export default Basket