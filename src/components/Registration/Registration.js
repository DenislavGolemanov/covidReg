import style from '../Registration/Registration.module.css'

import {Component} from 'react'

import Menu from '../Menu/Menu'
import InputField from '../commonComponents/InputField/InputField'
import SelectItem from '../commonComponents/SelectItem/SelectItem'


let uniqid = require('uniqid')

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

                <section className={style.small}>
                    <span>Вашата Самоличност</span>
                    <p>Моля, въведете Вашите имена на кирилица, както са изписани в личната Ви карта.</p>
                </section>
                
                <section className= {style.form}>


                    <form >
                        <section className={style.row}>

                            <InputField key={uniqid()} data={["Име" , "text" , "firstName"]}/>
                            <InputField key={uniqid()} data={["Презиме" , "text" , "secondName"]}/>
                            <InputField key={uniqid()} data={["Фамилия" , "text" , "lastName"]}/>


                        </section>

                        <section className={style.row}>

                            <SelectItem 
                                data= {
                                    [
                                        uniqid() , 'meanOfSignature' , 'ЕГН/ЛНЧ' , [ 'EGN' , 'LNC' ]
                                    ]
                                }
                            />
                            <InputField key={uniqid()} data={["ЕГН" , "number" , "ID"]}/>
                            <InputField key={uniqid()} data={["Дата на раждане" , "date" , "dateBirth"]}/>

                        </section>

                        <section className={style.row}>

                            <InputField key={uniqid()} data={["Номер на лична карта" , "number" , "cardNum"]}/>
                            <InputField key={uniqid()} data={["Дата на издаване" , "date" , "dateInit"]}/>

                            <SelectItem 
                                data= {
                                    [
                                        uniqid() , 'city' , 'Meстоживеене' , [ 'Ruse' , 'Varna' , 'Plovdiv' , 'Sofia' ]
                                    ]
                                }
                            />
                        </section>


                        <section className={style.small}>
                            <span>Kooрдинати за връзка с вас</span>
                        </section>

                        <section className={style.row}>

                            <SelectItem 
                                data= {
                                    [
                                        uniqid() , 'meanOfContact' , 'Телефон/Имейл' , [ 'Phone' , 'Email' ]
                                    ]
                                }
                            />
                            <InputField key={uniqid()} data={["Телефон" , "number" , "telNumber"]}/>
                            <InputField key={uniqid()} data={["Email" , "date" , "email"]}/>
                
                        </section>

                        <input className={style.button} type="submit" value="Продължи" />



                    </form>


                </section>


            </div>
        </div>
        )
    }
}


export default Registration