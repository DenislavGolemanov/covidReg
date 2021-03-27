import style from '../Info/Info.module.css'

import {Link} from 'react-router-dom'

function Info(props) {


    return (
        <div className={style.infoWrapper}>
        <div className={style.infoMain}>

            <div className={style.textualContent}>

              <div className={style.titles}>
                
                  <h1 className={style.header}>
                    Всичко за здравеопазването
                  </h1>

                  <span className={style.subHeader}>
                    на едно място
                  </span>
              </div>

              <p>
                Добре дошли в единната здравна информационна система на Министерството на здравеопазването на Република България
              </p>

              <Link to="/about">
                  <div className={style.redButton}>
                        Повече за системата
                  </div>
              </Link>
                
            </div>

            <div className={style.imageCard}>
                <img src="../img/doctor-nurse-discussing-digital-tablet.jpg" alt=""/>
            </div>

            </div>
       </div>
        

    )
}

export default Info