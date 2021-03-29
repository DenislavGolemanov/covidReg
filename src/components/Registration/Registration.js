import style from '../Registration/Registration.module.css'

import React from 'react'
import {Link} from 'react-router-dom'

import Menu from '../Menu/Menu'
import InputField from '../commonComponents/InputField/InputField'
import SelectItem from '../commonComponents/SelectItem/SelectItem'
import Button from '../commonComponents/Button/Button'



let uniqid = require('uniqid')


function Registration({history}) {

    const [value, setValue] = React.useState(

        localStorage.getItem('tempStoring') || '');
    
    let temp='';

    if( value!= '') {

        temp = JSON.parse(value)

    }   


    // console.log(data.firstName)

    const onPersonalDataSubmit = (e) => {
        	
        e.preventDefault()



        const {firstName,
            secondName,
            lastName,
            ID,
            dateBirth,
            cardNum,
            dateInit,
            telNumber,
            email,

            meanOfSignature,
            city,
            meanOfContact,
            } = e.target

        // console.log(meanOfSignature.value)
        // console.log(city.value)
        // console.log(meanOfContact.value)


        let localObject = {'firstName': firstName.value , 'secondName': secondName.value , 'lastName': lastName.value,
            'id': ID.value , 'dateBirth': dateBirth.value , 'cardNum': cardNum.value , 'dateInit': dateInit.value,
            'telNumber': telNumber.value , 'email': email.value , 'meanOfSignature': meanOfSignature.value , 'meanOfContact': meanOfContact.value ,
            'city': city.value}

            ///TODO: Validation

            localStorage.setItem('tempStoring', JSON.stringify(localObject));

            history.push('/registration/vaccine')

    }

    let menuOptions =  [{name: 'Лични данни' , path: '/registration/personal-record'} , 
                            {name: 'Предпочитана ваксина' , path: '/registration/vaccine'} , 
                            {name: 'Ваксинационен център' , path: '/registration/location'}, 
                            {name: 'Час за ваксинация' , path: '/registration/time'}
                        ];


    return(

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


                    <form onSubmit={onPersonalDataSubmit} >
                        <section className="row">

                            <InputField value={temp.firstName || ''} key={uniqid()} data={["Име" , "text" , "firstName"]}/>
                            <InputField value={temp.secondName || ''} key={uniqid()} data={["Презиме" , "text" , "secondName"]}/>
                            <InputField value={temp.lastName || ''} key={uniqid()} data={["Фамилия" , "text" , "lastName"]}/>


                        </section>

                        <section className="row">

                            <SelectItem 

                                value={temp.meanOfSignature || ''}

                                data= {
                                    [
                                        uniqid() , 'meanOfSignature' , 'ЕГН/ЛНЧ' , [ 'EGN' , 'LNC' ]
                                    ]
                                }
                            />
                            <InputField value={temp.id || ''} key={uniqid()} data={["ЕГН" , "number" , "ID"]}/>
                            <InputField value={temp.dateBirth || ''} key={uniqid()} data={["Дата на раждане" , "date" , "dateBirth"]}/>

                        </section>

                        <section className="row">

                            <InputField value={temp.cardNum || ''} key={uniqid()} data={["Номер на лична карта" , "number" , "cardNum"]}/>
                            <InputField value={temp.dateInit || ''} key={uniqid()} data={["Дата на издаване" , "date" , "dateInit"]}/>

                            <SelectItem 

                                value={temp.city || ''}

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
                                value={temp.meanOfContact || ''}

                                data= {
                                    [
                                        uniqid() , 'meanOfContact' , 'Телефон/Имейл' , [ 'Phone' , 'Email' ]
                                    ]
                                }
                            />
                            <InputField value={temp.telNumber || ''} key={uniqid()} data={["Телефон" , "number" , "telNumber"]}/>
                            <InputField value={temp.email || ''} key={uniqid()} data={["Email" , "email" , "email"]}/>
                
                        </section>

                        <Button name="Продължи"/>



                    </form>


                </section>


            </div>
        </div>

    )
}


export default Registration