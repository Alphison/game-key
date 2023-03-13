import ava from "../../assets/img/ava.png"
import style from './user.module.css'

const User = () => {
    return (
        <div className={style.wrapper_user}>
            <div className={style.img_user}>
                <img src={ava} alt="" />
            </div>
            <div className={style.content_user}>
                <h1 className={style.user_h1}>
                    Имя Фамилия Отчество
                </h1>
                <p className={style.text_user}>
                    user@mail.ru
                </p>
                <p className={style.text_user}>
                    +79393433623
                </p>
            </div>
        </div>
    )
}

export default User