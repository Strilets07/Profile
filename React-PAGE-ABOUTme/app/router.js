import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainBox from './components/main-box';
import SearchBox from './components/search-box';

import Home from './components/home';
import Photography from './components/photography';
import Cv from './components/cv';
import Contact from './components/contact';


export default (
  <Router history={browserHistory}>
      <Route component={MainBox}>

          <Route path="/" component={Home}/>


          <Route path="/photography">
              <Route component={SearchBox}>
                  <IndexRoute component={Photography}/>
              </Route>

          </Route>

          <Route path="/cv">
                <Route component={SearchBox}>
                    <IndexRoute component={Cv}/>
                </Route>
          </Route>

          <Route path="/contact">
                <Route component={SearchBox}>
                    <IndexRoute component={Contact}/>
                </Route>
          </Route>

      </Route>
  </Router>
)
