import style from '../SelectItem/SelectItem.module.css'

function SelectItem(props) {

    let [id , name , placeholder] = props.data;

    let opts = props.options

    let listedOptions = []

    // console.log(arrOptions)



            opts.forEach(opt =>{ 
                
    
                listedOptions.push(<option key={opt} value={opt}> {opt} </option>)
    
            })

    // console.log(listedOptions)


    return(

        <select className={style.select} id={id} name={name} onChange = {props.onChange}>
            <option value='' disabled selected> {placeholder}</option>
                {
                   listedOptions
                }
            </select>


    )
}



export default SelectItem;