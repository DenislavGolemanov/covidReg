import style from '../MenuOption/MenuOption.module.css'



function MenuOption(props) {



    if(window.location.pathname == props.data.path) {
        return(
        
            <div className={style.menuOption , style.selected} >

            <div className={style.num}>
                {props.counter}
            </div>

            <div className={style.value}>
                {props.data.name}
            </div>
            </div>
            )

    }

    else return (
        <div className={style.menuOption} >

            <div className={style.num}>
                {props.counter}
            </div>

            <div className={style.value}>
                {props.data.name}
            </div>
            </div>
            )
    


    
}

export default MenuOption