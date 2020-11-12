import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Game from './components/game';
import Welcome from './components/welcome';
import Navigation from './components/nav';
import Counter from './components/counter';
import NotFound from './components/not-found';
import Tasks from './components/tasks';
import './App.css';


const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  </div>
)


const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
