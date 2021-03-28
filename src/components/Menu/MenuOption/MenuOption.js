import style from '../MenuOption/MenuOption.module.css'

function MenuOption(props) {

    console.log(props.data)

    return(
        <div className={style.menuOption}>

                    <div className={style.num}>
                        1
                    </div>

                    <div className={style.value}>
                        {props.data}
                    </div>
        </div>
    )
}

export default MenuOption