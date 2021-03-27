import style from '../Footer/Footer.module.css'

function Footer(props) {


    return (
        <footer className={style.sub}>

            <span className={style.creator}>Created by Denislav Golemanov &copy; </span>

            <img className={style.logo} src="../img/mstile-150x150.png" alt="logo"/>
            

        </footer>
        

    )
}

export default Footer