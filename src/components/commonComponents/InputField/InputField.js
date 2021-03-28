import style from '../InputField/InputField.module.css'

function InputField(props) {

    let [placeholder , type , name] = props.data;

    return(

        <input className={style.inputField} placeholder={placeholder}  type={type} name={name}/>

    )
}



export default InputField;