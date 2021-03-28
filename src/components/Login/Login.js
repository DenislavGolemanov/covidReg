
import InputField from '../commonComponents/InputField/InputField'
import Button from '../commonComponents/Button/Button'



let uniqid = require('uniqid')


function Login(props) {

    return(

        <div className="wrapper">

            <div className="content">
                <section className="small">

                    <span>Вашата Самоличност</span>
                    <p>Моля, въведете Вашите имена на кирилица, както са изписани в личната Ви карта.</p>

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