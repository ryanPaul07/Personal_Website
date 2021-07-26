import React, {useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import {HashRouter as Router, BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';


function App({history}) {
  let urlPath = window.location.pathname.split('/')[1];

  return (
    <div className="App">
      { urlPath == "" || urlPath == "about" || urlPath == "projects" || urlPath == "contact" 
      ?
          <Router> 
            <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      : 
        <Router>
          <Switch>
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
          </Switch>
        </Router>
      }
    </div>
  );
}

export default withRouter(App);
