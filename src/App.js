import React from 'react';
import Navs from './components/Navs';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import User from './components/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navs />
        <Switch>
          <Route path='/' exact>
            {Home}
          </Route>
          <Route path='/about'>{About}</Route>
          <Route path='/contacts'>{Contacts}</Route>
          <Route path='user/:username' exact>
            {User}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
