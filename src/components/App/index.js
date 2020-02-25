import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import SignIn from '../SignIn';
import Admin from '../Admin';
import Home from '../Home';
import Landing from '../Landing';
import SignUp from '../SignUp';
import PasswordForget from '../PasswordForget';
import Account from '../Account';
import '../../index.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <h1 className='center'>Green Mile App</h1>
       <Switch>
       <Route path={ROUTES.SIGN_IG} component={SignIn} />
        <Route path={ROUTES.ADMIN} component={Admin} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
       </Switch>
      </div>
    </Router>
  );
};

export default App;
