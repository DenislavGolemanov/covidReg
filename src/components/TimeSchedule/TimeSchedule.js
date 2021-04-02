import style from '../TimeSchedule/TimeSchedule.module.css'

import * as regService from '../../services/regService'


import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

import Menu from '../Menu/Menu'
import SelectItem from '../commonComponents/SelectItem/SelectItem'
import Button from '../commonComponents/Button/Button'
import TimeButtons from '../commonComponents/TimeButton/TimeButton'
import Back from '../commonComponents/BackButton/BackButton'


function TimeSchedule() {

    const [availability , setAvailability] = useState({dates : ['Loading...']})
    const [times , setTimes] = useState([{['-----'] : 'Часове....'}])



    useEffect(()=> {

        regService.getHospitalAvailability(city , selectedHospital)
                   .then(res => setAvailability(res))
                   .then((res) => console.log(availability))

    }, [])

    let temp = JSON.parse(localStorage.getItem('tempStoring'))

    let {city , selectedHospital} = temp



    let menuOptions =  [{name: 'Лични данни' , path: '/registration/personal-record'} , 
                            {name: 'Предпочитана ваксина' , path: '/registration/vaccine'} , 
                            {name: 'Ваксинационен център' , path: '/registration/vaccine-center'}, 
                            {name: 'Час за ваксинация' , path: '/registration/time'}
                        ];

    
    
    
    const onChangeHandler = (e) => {

        setTimes(availability[e.target.value])

    }
    

    

    return(
        <div className="wrapper">


                <div className="content">



                <section className='registred'>
                        <p>Вече имам резервация</p>
                        <Link to="/reservation" className="link">преглед</Link>
                </section>

                <Menu data = {menuOptions}/>

                <form>



                    <div className= {style.select}>  

                        <span>Изберете една от работните дати на избрания от Вас център:</span>


                         <SelectItem 

                            onChange = {onChangeHandler}

                            data= {
                                [
                                    'hospitalSelect' , 'date'  ,  'Моля изберете дата'
                                ]
                            }

                            options = {availability.dates}

                            />

                     </div> 

                     <div>

                         <span>Изберете час от свободните такива:</span>
                         

                            <TimeButtons  times = {times}/>



                    </div>
               




                <div className={style.buttons}>

                    <Back/>
                    <Button  name="Продължи"/>


                </div>
                    
                </form>

                </div>

            </div>
    )
}



export default TimeSchedule

