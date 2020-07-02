import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Container/Home';
import Header from './Component/Header';
import Conversion from './Container/Conversion';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/conversion' component={Conversion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
