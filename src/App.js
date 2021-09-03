import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import {
  Home,
  Specifications,
  PriceList,
  locationMap,
  MasterPlan,
  FloorPlan,
  ElevationImages,
  ConstructionUpdate,
  SampleFlat,
  ThankYou,
  Disclaimer,
  WhyInvest,
  NotFoundPage,
} from './Layout/AllPages';

ReactGA.initialize('UA-69690963-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/properties-in-dwarka-expressway-with-high-roi.html'
            component={WhyInvest}
          />
          <Route exact path='/disclaimer.html' component={Disclaimer} />
          <Route exact path='/thank-you.html' component={ThankYou} />
          <Route exact path='/sample-flat.html' component={SampleFlat} />
          <Route
            exact
            path='/construction-update.html'
            component={ConstructionUpdate}
          />
          <Route
            exact
            path='/elevation-images.html'
            component={ElevationImages}
          />
          <Route exact path='/floor-plan.html' component={FloorPlan} />
          <Route exact path='/master-plan.html' component={MasterPlan} />
          <Route exact path='/location-map.html' component={locationMap} />
          <Route exact path='/price-list.html' component={PriceList} />
          <Route exact path='/specifications.html' component={Specifications} />
          <Route exact path='/' component={Home} />
        </Switch>
          {/* <Route component={NotFoundPage} /> */}
      </Router>
    </>
  );
};

export default App;
