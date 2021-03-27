import style from '../Counter/Counter.module.css'

function Counter(props) {

    return (

        <div className={style.counter}>

        <table className={style.table}>

        <div className={style.info}>

          <span>Статистика</span>
            <p>Актуална информация към 27.03.2021г.</p>
          </div>

            <tr>
              <th>Потвърдени</th>
              <th>Починали</th>
              <th>Излекувани</th>
            </tr>

            <tr>
              <td className= {style.orange}>325 233</td>
              <td className={style.red}>12 601</td>
              <td className={style.green}>24 451</td>
            </tr>
            
        </table>
      

    </div>
    )

}

export default Counter