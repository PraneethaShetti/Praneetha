import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import WorkDone from './components/workDone';
import NavHeader from './components/navHeader';
import FooterWebsite from './components/footerWebsite';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="top">
        <div className="wrapper row4">
          <NavHeader />
        </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/workDone" component={WorkDone} />
          {/* <FooterWebsite /> */}
        </div>
      </Router>
    );
  }
}

export default App;
