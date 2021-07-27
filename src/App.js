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
        {/* <Route exact path="/specifications.html" component={Specifications} />
        <Route exact path="/price-list.html" component={PriceList} />
        <Route exact path="/location-map.html" component={locationMap} />
        <Route exact path="/master-plan.html" component={MasterPlan} />
        <Route exact path="/floor-plan.html" component={FloorPlan} />
        <Route exact path="/elevation-images.html" component={ElevationImages} />
        <Route exact path="/constrution-update.html" component={ConstrutionUpdate} />
        <Route exact path="/sample-flat.html" component={SampleFlat} /> */}
        <Route exact path="/thank-you.html" component={ThankYou} />
      </Router>
    </>
  )
}


export default App;
