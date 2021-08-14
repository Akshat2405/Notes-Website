import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Sorted from './Sorted';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/sorted">
      <Sorted/>
    </Route>

    </Switch>
    </Router>
    </>
  );
}


export default App;
