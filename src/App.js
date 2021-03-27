import './App.css';

import {Route , Switch} from 'react-router-dom'

import Header from '../src/components/Header/Header'
import Counter from '../src/components/Counter/Counter'
import Footer from '../src/components/Footer/Footer'
import Info from '../src/components/Info/Info'
import HomeView from '../src/components/HomePage/HomePage'


function App() {
  return (

    <div className="App">

      <Header/>

      <Switch>
          <Route path="/" exact component={HomeView} />
          {/* <Route path="/information" component="HomeView" />
          <Route path="/registration" component="HomeView" /> */}
      </Switch>


      {/* <Counter />

      <Info /> */}

      <Footer />


    </div>
    

  );
}

export default App;
