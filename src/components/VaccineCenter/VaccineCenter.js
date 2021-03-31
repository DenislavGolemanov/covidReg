import style from '../VaccineCenter/VaccineCenter.module.css'

import regService from '../../services/regService'


import {Component} from 'react'
import {Link} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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

        this.state = {}

    }


    // componentDidMount() {

    //     regService.getCityHospitals()
    //       .then(res=> this.setState({...res}))
    //       // .then((res)=> console.log(this.state))
    //   }


    render() {


        return (

            <div className="wrapper">

                <div className="content">

                <section className='registred'>
                        <p>Вече имам резервация</p>
                        <Link to="/reservation" className="link">преглед</Link>
                </section>

                <Menu data = {this.menuOptions}/>


                <MapContainer id="mapid" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        id = "mapbox/satellite-v9"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

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

