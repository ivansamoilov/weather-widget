import React from "react";
import {  BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from "../Header";
import CitiesList from "../CitiesList";
import CityFull from "../CityFull";

const App = () =>{
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route
                      path='/weather-widget'
                      component={CitiesList}
                      exact
                  />
                  <Route
                      path='/city/:id'
                      component={CityFull}
                      exact
                  />
                  <Route render={() => <h2>Page not found</h2>} />
              </Switch>
          </div>
      </Router>
  );
};

export default App;
