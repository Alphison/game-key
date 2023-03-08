import style from "./sub.module.css"

const Subscription = () => {
    return (
        <div className={style.subscription}>
            <h1 className={style.h1_sub}>
                Подписка на рассылку
            </h1>
            <input type="text" placeholder="Email"/>
            <button className={style.btn_sub}>ПОДПИСАТЬСЯ</button>
        </div>
    )
}
export default Subscription