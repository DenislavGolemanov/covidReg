import style from '../Counter/Counter.module.css'
import covidService from '../../services/covidService'

import {Component} from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      confirmed : '',
      deaths: '',
      recovered: '',
    }
  }

  componentDidMount() {

    covidService.getInfo()
      .then(res=> this.setState({...res}))
      .then((res)=> console.log(this.state))
  }

  render(){

    return (

      <div className={style.counter}>

      <table className={style.table}>

      <div className={style.info}>

        <span>Статистика</span>
          <p>Актуална информация към {this.state.date}г.</p>
        </div>

          <tr>
            <th>Потвърдени</th>
            <th>Починали</th>
            <th>Излекувани</th>
          </tr>

          <tr>
            <td className= {style.orange}>{this.state.confirmed}</td>
            <td className={style.red}>{this.state.deaths}</td>
            <td className={style.green}>{this.state.recovered}</td>
          </tr>
          
      </table>
    

  </div>
  )
    
  }
}


export default Counter