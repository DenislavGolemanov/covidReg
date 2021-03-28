
import InputField from '../commonComponents/InputField/InputField'
import Button from '../commonComponents/Button/Button'



let uniqid = require('uniqid')


function Login(props) {

    return(

        <div className="wrapper">

            <div className="content">
                <section className="small">

                    <span>Идентификация</span>
                    <p>Моля, въведете кодът, който сте получили, и данните, с които сте запазили вашия час за имунизация</p>

                </section>

                <form>

                    <div className="row">

                    <InputField key={uniqid()} data={["Код" , "number" , "verificationCode"]}/>
                    <InputField key={uniqid()} data={["ЕГН/ЛНЧ" , "number" , "ID"]}/>
                    <Button name={'Напред'}/>

                    </div>

                </form>
            </div>

            
            
        </div>

    )
}

export default Login