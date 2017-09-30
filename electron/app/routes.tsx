import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
//import HomePage from './containers/HomePage';
import GameHome from './containers/game/GameHome';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={GameHome} />
      <Route path="/game" component={GameHome} />
    </Switch>
  </App>
);
