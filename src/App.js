import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Specifications,
  PriceList,
  locationMap,
  MasterPlan, FloorPlan, ElevationImages, ConstrutionUpdate, SampleFlat,
  ThankYou,
  Disclaimer
} from './Layout/AllPages';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/disclaimer.html" component={Disclaimer} />
          <Route exact path="/thank-you.html" component={ThankYou} />
          <Route exact path="/sample-flat.html" component={SampleFlat} />
          <Route exact path="/constrution-update.html" component={ConstrutionUpdate} />
          <Route exact path="/elevation-images.html" component={ElevationImages} />
          <Route exact path="/floor-plan.html" component={FloorPlan} />
          <Route exact path="/master-plan.html" component={MasterPlan} />
          <Route exact path="/location-map.html" component={locationMap} />
          <Route exact path="/price-list.html" component={PriceList} />
          <Route exact path="/specifications.html" component={Specifications} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}


export default App;
