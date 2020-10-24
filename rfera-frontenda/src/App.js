import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/style.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Component
import Header from './components/common/Header';
import Device from './components/pages/Device';
import Event from './components/pages/Event';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Device} />
            <Route path="/dashboard" component={Event} />
            {/* <Route component={Error404} /> */}
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
