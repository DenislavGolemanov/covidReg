import style from '../InputField/InputField.module.css'

function InputField(props) {

    let [placeholder , type , name] = props.data;

    // let setValue = props.value? props.value : '';

    if(props.value) {

        return(


            <input className={style.inputField} placeholder={placeholder}  type={type} name={name} defaultValue={props.value}/>
    
        )
        
    } else return (

        <input className={style.inputField} placeholder={placeholder}  type={type} name={name}/>

    )


}



export default InputField;