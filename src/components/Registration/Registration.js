import style from '../Registration/Registration.module.css'

import {Component} from 'react'
import {Link} from 'react-router-dom'

import Menu from '../Menu/Menu'
import InputField from '../commonComponents/InputField/InputField'
import SelectItem from '../commonComponents/SelectItem/SelectItem'
import Button from '../commonComponents/Button/Button'



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

                <section className="registred">
                    <p>Вече имам резервация</p>
                    <Link to="/reservation" className="link">преглед</Link>
                </section>

                <Menu data = {menuOptions}/>

                <section className={style.small}>
                    <span>Вашата Самоличност</span>
                    <p>Моля, въведете Вашите имена на кирилица, както са изписани в личната Ви карта.</p>
                </section>
                
                <section className= {style.form}>


                    <form >
                        <section className="row">

                            <InputField key={uniqid()} data={["Име" , "text" , "firstName"]}/>
                            <InputField key={uniqid()} data={["Презиме" , "text" , "secondName"]}/>
                            <InputField key={uniqid()} data={["Фамилия" , "text" , "lastName"]}/>


                        </section>

                        <section className="row">

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

                        <section className="row">

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

                        <section className="row">

                            <SelectItem 
                                data= {
                                    [
                                        uniqid() , 'meanOfContact' , 'Телефон/Имейл' , [ 'Phone' , 'Email' ]
                                    ]
                                }
                            />
                            <InputField key={uniqid()} data={["Телефон" , "number" , "telNumber"]}/>
                            <InputField key={uniqid()} data={["Email" , "email" , "email"]}/>
                
                        </section>

                        <Button name="Продължи"/>



                    </form>


                </section>


            </div>
        </div>
        )
    }
}


export default Registration