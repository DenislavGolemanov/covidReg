import './App.css';

import {Route , Switch} from 'react-router-dom'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import HomeView from '../src/components/HomePage/HomePage'
import About from '../src/components/About/About'
import Registration from '../src/components/Registration/Registration'




function App() {
  return (

    <div className="App">

      <Header/>

      <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/about" component={About} />
          <Route path="/registration" component={Registration} />
      </Switch>

      <Footer />


    </div>
    

  );
}

export default App;
