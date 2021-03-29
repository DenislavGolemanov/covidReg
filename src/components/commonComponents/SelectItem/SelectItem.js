import style from '../SelectItem/SelectItem.module.css'

function SelectItem(props) {

    let [id , name , placeholder , arrOptions] = props.data;

    let listedOptions = []

            arrOptions.forEach(opt =>{ 
                
                if(props.value == opt) {

                    listedOptions.push(<option selected key={opt} value={opt}> {opt} </option>)
                }
    
                listedOptions.push(<option key={opt} value={opt}> {opt} </option>)
    
            })

    // console.log(listedOptions)


    return(

        <select className={style.select} id={id} name={name}>
            {/* <option value='' disabled selected> {placeholder}</option> */}
                {
                   listedOptions
                }
            </select>


    )
}



export default SelectItem;