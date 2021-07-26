import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Layout/Home';
import Disclaimer from './Layout/Disclaimer';
import ThankYou from './Layout/ThankYou';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/disclaimer.html" component={Disclaimer} />
      </Router>
    </>
  )
}


export default App;
