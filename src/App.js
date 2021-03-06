import './App.css';

import {Route , Switch} from 'react-router-dom'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import HomeView from '../src/components/HomePage/HomePage'
import About from '../src/components/About/About'
import Registration from '../src/components/Registration/Registration'
import Reservation from  '../src/components/Login/Login'
import Vaccine from '../src/components/Vaccine/Vaccine'
import VaccineCenter from '../src/components/VaccineCenter/VaccineCenter'
import TimeSchedule from './components/TimeSchedule/TimeSchedule';




function App() {
  return (

    <div className="App">

      <Header/>

      <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/about" component={About} />
          <Route path="/registration/personal-record" component={Registration} />
          <Route path="/registration/vaccine" component={Vaccine} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/registration/vaccine-center" component={VaccineCenter} />
          <Route path="/registration/time" component={TimeSchedule} />


      </Switch>

      <Footer />


    </div>
    

  );
}

export default App;
