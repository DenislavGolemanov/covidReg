import style from '../Header/Header.module.css'

function Header(props) {


    return (
        <div>
            <div className={style.header}>

                <div className={style.logos}>
                    <a href="#">
                    <img src="../img/Branding-MoH.svg" alt="minOfHealth"/>
                    </a>
                    <a href="#">
                    <img src="../img/his-wip.svg" alt="minOfHealth"/>
                    </a>
                </div>
            </div>

            <div className={style.sub}>

                <div className={style.registration}>
                    <span>Начало</span>

                    <a href="#">COVID-19 Регистрация за ваксинация</a>
                </div>
            </div>
        </div>
        

    )
}

export default Header