import style from '../Menu/Menu.module.css'

import MenuOption from '../Menu/MenuOption/MenuOption'

    function Menu(props) {

        let counter = 0;

        let MenuSet = props.data.map(opt =>{

            counter ++

            return(
                <MenuOption
                    data = {opt}
                    counter = {counter}
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

            