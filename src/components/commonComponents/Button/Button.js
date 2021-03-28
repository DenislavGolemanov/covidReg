import style from '../Button/Button.module.css'

function Button(props) {

    // let [id , name , placeholder , arrOptions] = props.data;

    // let listedOptions = []

    //         arrOptions.forEach(opt =>{                       
    
    //             listedOptions.push(<option key={opt} value={opt}> {opt} </option>)
    
    //         })

    // console.log(listedOptions)


    return(

        <input className={style.button} type="submit" value={props.name} />


    )
}



export default Button;