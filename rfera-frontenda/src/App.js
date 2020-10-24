import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/style.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Component
import Device from './components/pages/Device';
import Event from './components/pages/Event';
import AddDevice from './components/pages/AddDevice';
import Error404 from './components/pages/Error404';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Device} />
            <Route path="/add-device" component={AddDevice} />
            <Route path="/event" component={Event} />
            <Route component={Error404} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
