import style from '../SelectItem/SelectItem.module.css'

function SelectItem(props) {

    let [id , name , arrOptions] = props.data;

    let opts = props.options

    // console.log(opts + 'from select Item')

    let listedOptions = []

    // console.log(arrOptions)

            opts.forEach(opt =>{ 
                
    
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