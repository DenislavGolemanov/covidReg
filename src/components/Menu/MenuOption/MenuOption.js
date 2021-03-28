import style from '../MenuOption/MenuOption.module.css'


import {Link} from 'react-router-dom'

function MenuOption(props) {

    // console.log(props.counter + 'from MEnuOption')

    return(
        <Link to={props.data.path} style={{ textDecoration: 'none'  , color: 'black' , flex: '1 1 auto'}}>

                <div className={style.menuOption}>

                <div className={style.num}>
                    {props.counter}
                </div>

                <div className={style.value}>
                    {props.data.name}
                </div>
                </div>

        </Link>
    )
}

export default MenuOption