import style from '../VaccineCenter/VaccineCenter.module.css'

import * as regService from '../../services/regService'




import {Component} from 'react'
import {Link , withRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import * as L from 'leaflet'

import Menu from '../Menu/Menu'
import SelectItem from '../commonComponents/SelectItem/SelectItem'
import Button from '../commonComponents/Button/Button'
import Back from '../commonComponents/BackButton/BackButton'


class VaccineCenter extends Component {

    constructor(props) {
        super(props)

        this.menuOptions =  [{name: 'Лични данни' , path: '/registration/personal-record'} , 
                            {name: 'Предпочитана ваксина' , path: '/registration/vaccine'} , 
                            {name: 'Ваксинационен център' , path: '/registration/vaccine-center'}, 
                            {name: 'Час за ваксинация' , path: '/registration/time'}
                        ];
        
        this.state = {
            hospitals : [],
            location : {},
            cityName : '',
            hospitalOption : '',
        }


        this.onPersonalDataSubmit = this.onPersonalDataSubmit.bind(this)

    }

    map(location) {
        var map = L.map('mapid').setView(location, 13);
    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }


    onPersonalDataSubmit(e) {

        e.preventDefault()

        const {history} = this.props

        let temp = localStorage.getItem('tempStoring')
        temp = JSON.parse(temp)

        let input = e.target.hospital.value

        temp.selectedHospital = input;

        localStorage.setItem('tempStoring' , JSON.stringify(temp))

        history.push('/registration/time')

    }



    componentDidMount() {

        let data = localStorage.getItem('tempStoring')
        let cityName = JSON.parse(data).city
        
        regService.getCityHospitals(cityName)
            .then(res=> this.setState({...res}))
            .then(res => this.map(this.state.location))

    }

    render() {

        


        return (

            <div className="wrapper">


                <div className="content">



                <section className='registred'>
                        <p>Вече имам резервация</p>
                        <Link to="/reservation" className="link">преглед</Link>
                </section>

                <Menu data = {this.menuOptions}/>

                <form onSubmit={this.onPersonalDataSubmit}>

                    <span>Моля изберете ваксинационен център в града посочен от Вас</span>

                    <div className= {style.select}>

                        <SelectItem 


                            data= {
                                [
                                    'hospitalSelect' , 'hospital'  , 'Ваксинационен център'
                                ]
                            }

                            options = {this.state.hospitals.map((obj) => obj.name)}

                            />

                    </div>
               



                    <div id="mapid"></div>

                <div className={style.buttons}>

                    <Back/>
                    <Button  name="Продължи"/>


                </div>
                    
                </form>

                </div>

            </div>



            
        )
    }
}


export default withRouter(VaccineCenter)

