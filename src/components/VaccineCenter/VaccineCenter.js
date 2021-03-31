import style from '../VaccineCenter/VaccineCenter.module.css'

import * as regService from '../../services/regService'


import {Component} from 'react'
import {Link} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet'

import Menu from '../Menu/Menu'
// import SelectItem from '../commonComponents/SelectItem/SelectItem'
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
            cityName : ''

        }


    }

    map(location) {
        var map = L.map('mapid').setView(location, 13);
    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }



    componentDidMount() {

        let data = localStorage.getItem('tempStoring')
        let cityName = JSON.parse(data).city
        
        regService.getCityHospitals(cityName)
          .then(res=> this.setState({...res}))
          .then(res => this.map(this.state.location))
        
      }


    render() {

        let {location} = this.state


        return (

            <div className="wrapper">


                <div className="content">



                <section className='registred'>
                        <p>Вече имам резервация</p>
                        <Link to="/reservation" className="link">преглед</Link>
                </section>

                <Menu data = {this.menuOptions}/>

                <div id="mapid"></div>

                {/* <MapContainer id="mapid" center={location} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                        id = "mapbox/satellite-v9"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={location}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}

                <form>

                
                    <Back />
                    <Button  name="Продължи"/>
                </form>

                </div>

            </div>



            
        )
    }
}


export default VaccineCenter

