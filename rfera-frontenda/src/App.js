import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/style.scss';
import { Switch, Route } from "react-router-dom";

// Component
import Event from './components/pages/Event';
import DeviceUpdate from './components/pages/DeviceAddUpdate';
import Error404 from './components/pages/Error404';

class App extends Component {
  render() {
    return (
      <>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Event} />
            <Route path="/update/:id" component={DeviceUpdate}/>
            <Route path="/add-device" component={DeviceUpdate}/>
            <Route component={Error404} />
        </Switch>
      </React.Fragment>
      </>
    )
  }
}

export default App;
