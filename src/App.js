import "./App.css";
// import { useState } from "react";
import Homepage from "./Components/Pages/Homepage";
import Services from "./Components/Pages/Services";
import "../node_modules/bootstrap";
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Signup from "./Components/Pages/Signup";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <route exact path="/">
          <Homepage />
          <Services />
          </route>
          {/* <route path="/signup">
            <Signup />
          </route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
