import style from '../Menu/Menu.module.css'

import MenuOption from '../Menu/MenuOption/MenuOption'

    function Menu(props) {

        console.log(props.data)

        let MenuSet = props.data.map(opt =>{

            return(
                <MenuOption
                    data = {opt}
                />
            )
        })

        return(
            <menu className={style.menu}>
 
                {
                    MenuSet
                } 

            </menu>
        )
    }

    export default Menu

            