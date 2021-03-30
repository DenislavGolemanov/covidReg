import style from '../BackButton/BackButton.module.css'

import {useHistory} from 'react-router-dom'

function Button(props) {

    let history = useHistory()

    let previous = props.path

    // let [id , name , placeholder , arrOptions] = props.data;

    // let listedOptions = []

    //         arrOptions.forEach(opt =>{                       
    
    //             listedOptions.push(<option key={opt} value={opt}> {opt} </option>)
    
    //         })

    // console.log(listedOptions)


    return(

        <input className={style.button} type="submit" value={'Назад'}    onClick={(e)=> { 
                                                                                                e.preventDefault()
                                                                                                history.goBack()
                                                                                            }}/>

    )
}



export default Button;