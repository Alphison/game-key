import { NavLink } from "react-router-dom"
import Ikon from "../../assets/img/shopping-cart.png"
import Ikon2 from "../../assets/img/user.png"
import logo from "../../assets/img/logo.png"
import style from "./Header.module.css"

const Header = ({setActive}) => {
    return (
        <header>
            <NavLink to={"/"}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </NavLink>
            <nav>
                <NavLink className={style.navlink} to={"/"}>главная</NavLink>
                <NavLink className={style.navlink} to={"#catalog"}>каталог</NavLink>
                <NavLink className={style.navlink} to={"#skidki"}>скидки</NavLink>
            </nav>
            <div className={style.btns_header}>
                <div className={style.ikon} onClick={() => setActive(true)}>
                    <img src={Ikon} alt="" />
                </div>
                <NavLink to={"/user"}>
                    <div className={style.ikon}>
                        <img src={Ikon2} alt="" />
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header