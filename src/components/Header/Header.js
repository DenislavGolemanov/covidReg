import style from '../Header/Header.module.css'

import {Link} from 'react-router-dom'

function Header(props) {


    return (
        <div className={style.wrapper}>

            <div className={style.header}>

                <div className={style.registration}>
                    <span>Начало</span>

                    <Link to="/registration/personal-record">COVID-19 Регистрация за ваксинация</Link>
                </div>
            </div>

            <div className={style.sub}>

            <div className={style.logos}>
                <a href="https://his.bg/">
                <img src="../img/Branding-MoH.svg" alt="minOfHealth"/>
                </a>
                <Link to="/">
                <img src="../img/his-wip.svg" alt="minOfHealth"/>
                </Link>
            </div>
            </div>
        </div>
        

    )
}

export default Header