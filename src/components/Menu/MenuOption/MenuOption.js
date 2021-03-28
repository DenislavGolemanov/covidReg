import style from '../MenuOption/MenuOption.module.css'

function MenuOption(props) {

    // console.log(props.counter + 'from MEnuOption')

    return(
        <div className={style.menuOption}>

                    <div className={style.num}>
                        {props.counter}
                    </div>

                    <div className={style.value}>
                        {props.data}
                    </div>
        </div>
    )
}

export default MenuOption