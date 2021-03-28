import style from '../Vaccine/Vaccine.module.css'

import {Link} from 'react-router-dom'

import Menu from '../Menu/Menu'
import Button from '../commonComponents/Button/Button'




function Vaccine(props) {

    let menuOptions = ['Лични данни' , 'Предпочитана ваксина' , 'Ваксинационен център' , 'Час за ваксинация']

    return(
        <div className="wrapper">

            <div className="content">

            <section className='registred'>
                    <p>Вече имам резервация</p>
                    <Link to="/reservation" className="link">преглед</Link>
            </section>

            <Menu data = {menuOptions}/>

            <span>Предпочитана ваксина</span>

            <form action="">

                <div className={style.radioOptions}>

                    <div className={style.option}>
                    <input type="radio" id="rnk" name="vaccinePreference" value="rnk"
                            checked />
                    <label for="rnk">иРНК</label>
                    </div>

                    <div className={style.option}>
                    <input type="radio" id="adeno" name="vaccinePreference" value="adeno" />
                    <label for="adeno">Аденовирусна</label>
                    </div>

                    <div className={style.option}>
                    <input type="radio" id="none" name="vaccinePreference" value="none" />
                    <label for="none">Нямам предпочитания</label>
                    </div>

                </div>


                        <Button name={'Продължи'} />
            </form>

            
            <section className={style.warning}>
                <div className={style.red}>!</div>
                <div className={style.pink}>
                    Маркираният избор ще гарантира по-добро планиране на доставките, но молим да вземете предвид, че решението за вида на ваксината, която ще Ви бъде поставена ще бъде взето на място от имунизиращия лекар на база медицински преглед и наличността на ваксини във ваксинационния център.
                </div>
            </section>

            

            </div>
        </div>
    )

}

export default Vaccine