import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer'
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import NotFound from './components/NotFound';
// import WTR from './components/WTR';
// import Design from './components/Design';

import {HashRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';


function App({history}) {
  let urlPath = window.location.href.split('/');
  let path = urlPath[urlPath.length-1]
  let classes = path == "design" ? 'App' : 'App';

  return (
    <div  className={classes}>
      <div style={{minHeight: "100vh"}}>
      { path == "" || path == "projects" || path == "about"
      ?
          <Router> 
            <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            {/* <Route path="/design" component={Design} />
            <Route path="/wtr" component={WTR} />
            <Route path="/contact" component={Contact} /> */}
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
      <Footer />
    </div>
  );
}

export default withRouter(App);
