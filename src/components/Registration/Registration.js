import style from '../Registration/Registration.module.css'

import {Component} from 'react'

import Menu from '../Menu/Menu'

class Registration extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let menuOptions = ['Лични данни' , 'Предпочитана ваксина' , 'Ваксинационен център' , 'Час за ваксинация'];

        return (

            <div className={style.wrapper}>
                <div className={style.content}>

                <section className={style.registred}>
                    <p>Вече имам резервация</p> 
                    <a className={style.link} href="#">преглед</a>                  
                </section>

                <Menu data = {menuOptions}/>

                {/* <menu>
                    <div className={style.menuOption}>

                        <div className={style.num}>
                            1
                        </div>

                        <div className={style.value}>
                            Лични данни
                        </div>
                    </div>

                    <div className={style.menuOption}>

                        <div className={style.num}>
                            2
                        </div>

                        <div className={style.value}>
                            Предпочитана ваксина
                        </div>
                    </div>

                    <div className={style.menuOption}>

                        <div className={style.num}>
                            3
                        </div>

                        <div className={style.value}>
                            Ваксинационен център
                        </div>
                    </div>

                    <div className={style.menuOption}>

                        <div className={style.num}>
                            4
                        </div>

                        <div className={style.value}>
                            Час за ваксинация
                        </div>
                    </div>
                </menu> */}



            </div>
        </div>
        )
    }
}


export default Registration