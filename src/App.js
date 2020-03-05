import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Support from './Support.js';
import EraOne from './EraOne.js';
import EraTwo from './EraTwo.js';
import EraThree from './EraThree.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/era1" component={EraOne} />
        <Route exact path="/era2" component={EraTwo} />
        <Route exact path="/era3" component={EraThree} />
        <Route exact path="/about" component={About} />
        <Route exact path="/support" component={Support} />
      </Switch>
    </div>
  );
}

export default App;
