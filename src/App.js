import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/era1" component={About} />
      </Switch>
    </div>
  );
}

export default App;
