import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import Splash from './splash';

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
