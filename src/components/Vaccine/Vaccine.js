import style from '../Vaccine/Vaccine.module.css'

import {useHistory , Link} from 'react-router-dom'
import React from 'react'

import Menu from '../Menu/Menu'
import Button from '../commonComponents/Button/Button'
import Back from '../commonComponents/BackButton/BackButton'






function Vaccine() {

    let history = useHistory()

    const [value, setValue] = React.useState(

    localStorage.getItem('tempStoring') || '');
    
    let temp='';

    if( value != '') {

        temp = JSON.parse(value)

    }   

    const onVaccinelDataSubmit = (e) => {
        	
        e.preventDefault()

        let inputs = Array.from(document.getElementsByTagName('INPUT'))
        
        inputs.forEach((button) =>  {

            if(button.checked) {

                temp.vaccinePreference = button.value

                localStorage.setItem('tempStoring', JSON.stringify(temp));

            }

            history.push('/registration/vaccine-center')
        })
    }

    let menuOptions =  [{name: 'Лични данни' , path: '/registration/personal-record'} , 
                            {name: 'Предпочитана ваксина' , path: '/registration/vaccine'} , 
                            {name: 'Ваксинационен център' , path: '/registration/vaccine-center'}, 
                            {name: 'Час за ваксинация' , path: '/registration/time'}
                        ];
    


    return(
        <div className="wrapper">

            <div className="content">

            <section className='registred'>
                    <p>Вече имам резервация</p>
                    <Link to="/reservation" className="link">преглед</Link>
            </section>

            <Menu data = {menuOptions}/>

            <span>Предпочитана ваксина</span>

            <form onSubmit={onVaccinelDataSubmit}>

                <div className={style.radioOptions}>

                    <div className={style.option}>
                    <input type="radio" id="rnk" name="vaccinePreference" value="rnk"
                           defaultChecked={temp.vaccinePreference == 'rnk'} />
                    <label for="rnk">иРНК</label>
                    </div>

                    <div className={style.option}>
                    <input type="radio" id="adeno" name="vaccinePreference" value="adeno" 
                            defaultChecked={temp.vaccinePreference == 'adeno'}/>
                    <label for="adeno">Аденовирусна</label>
                    </div>

                    <div className={style.option}>
                    <input type="radio" id="none" name="vaccinePreference" value="none" 
                            defaultChecked={temp.vaccinePreference == 'none'} />
                    <label for="none">Нямам предпочитания</label>
                    </div>

                </div>

                <section className={style.warning}>
                    <div className={style.red}>!</div>
                    <div className={style.pink}>
                        Маркираният избор ще гарантира по-добро планиране на доставките, но молим да вземете предвид, че решението за вида на ваксината, която ще Ви бъде поставена ще бъде взето на място от имунизиращия лекар на база медицински преглед и наличността на ваксини във ваксинационния център.
                    </div>
                </section>

                <section className="row">

                <Back />

                <Button name={'Продължи'}  />

                </section>


            </form>  


            </div>
        </div>
    )

}

export default Vaccine