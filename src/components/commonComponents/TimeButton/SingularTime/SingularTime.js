import style from '../../TimeButton/TimeButton.module.css'


function SingularTime(props) {

    if(props.status != "on") {

        return(
        <div>
             <input type="radio" name="selctedHour" disabled="true" value={props.hour} id={props.hour} />
             <label className={style.disabled} for={props.hour}>{props.hour}</label>
        </div>

        )


    }



    return(


        <div>
            <input type="radio" name="selctedHour" value={props.hour} id={props.hour} />
            <label className={style.radio} for={props.hour}>{props.hour}</label>
        </div>


    )



}


export default SingularTime