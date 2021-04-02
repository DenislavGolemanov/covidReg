import style from '../TimeButton/TimeButton.module.css'


import SingularTime from '../TimeButton/SingularTime/SingularTime'

function TimeButton(props) {

    
    let times = props.times
    console.log(times)

    let timeButtonArr = []

    props.times.forEach((input) =>{
    
        let [hour , status] = Object.entries(input)[0]

        timeButtonArr.push(

            <SingularTime hour = {hour} status = {status} />
        )

    }

    )

    console.log(timeButtonArr)
    


    


    return(

        <div className={style.radios}>

            {timeButtonArr}
            
        </div>


    )
}



export default TimeButton;