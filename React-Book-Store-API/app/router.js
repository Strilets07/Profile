import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainBox from './components/main-box';
import SearchBox from './components/search-box';

import Home from './components/home';
import MvcList from './components/mvc-list';
import Article from './components/articles';
import Film from './components/film';


export default (
  <Router history={browserHistory}>
      <Route component={MainBox}>

          <Route path="/" component={Home}/>


          <Route path="/mvc">
              <Route component={SearchBox}>
                  <IndexRoute component={MvcList}/>
              </Route>


          </Route>

          <Route path="/articles">
                <Route component={SearchBox}>
                    <IndexRoute component={Article}/>
                </Route>

          </Route>

          <Route path="/film">
                <Route component={SearchBox}>
                    <IndexRoute component={Film}/>
                </Route>

          </Route>

      </Route>
  </Router>
)
