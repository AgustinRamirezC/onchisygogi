import {Route, Switch} from 'react-router-dom';
import Home from"./Paginas/Home"
import Antes from './Paginas/Antes';
import Despues from './Paginas/Despues';
import River from './Paginas/River';
import Sorpresa from './Paginas/Sorpresa';
import Historia from './Paginas/Historia';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/antes' component={Antes}/>
          <Route path='/despues' component={Despues}/>
          <Route path='/river' component={River}/>
          <Route path='/sorpresa' component={Sorpresa}/>
          <Route path='/historia' component={Historia}/>
        </Switch>
    </div>
  );
}

export default App;
