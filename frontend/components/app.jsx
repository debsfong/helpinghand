import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { ProtectedRoute, ProtectedComponent, AuthRoute } from '../util/route_util.js';
import HeaderContainer from './header/header_container';
import Splash from './splash';
import EventIndexContainer from './event_index/event_index_container';
import NavBar from './header/nav_bar';

const App = () => (
  <div>
    <HeaderContainer />
    <ProtectedComponent path="/" component={NavBar} />
    <Switch>
      <ProtectedRoute path="/events" component={EventIndexContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
