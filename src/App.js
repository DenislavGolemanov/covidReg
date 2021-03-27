import './App.css';

import Header from '../src/components/Header/Header'

function App() {
  return (

    <div className="App">

      <Header/>

      <div className="counter">

        <span>Статистика</span>
        <p>Актуална информация към 27.03.2021г.</p>

        {/* potvurdeni , smurtnost izlekuvani */}

        <table>
            <tr>
              <td>Потвърдени</td>
              <td>Починали</td>
              <td>Излекувани</td>
            </tr>
            <tr>
              <td>325 233</td>
              <td>12 601</td>
              <td>24 451</td>
            </tr>
        </table>

      </div>

    </div>
    

  );
}

export default App;
