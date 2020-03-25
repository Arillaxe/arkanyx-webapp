import React from 'react';
// import {
//   BrowserRouter as Router, Route, Link, Switch,
// } from 'react-router-dom';
import spawnDebug from 'debug';

import './styles.styl';
import logo from './logo.png';

const debug = spawnDebug('react-app:app');


const App = () => {
  debug('start');
  return (
    // <Router>
    //   <Link to="/about/">About</Link>
    //   <h3 className="title">My React App!</h3>
    //   <Switch>
    //     <Route path="/about" component={() => <h2>About page</h2>} />
    //     <Route exact path="/" component={() => <h2>Main page</h2>} />
    //     <Route component={() => <div>Not found</div>} />
    //   </Switch>
    // </Router>

    <div className="App">
      <header className="App-header">
        <div className="a">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Soon...
        </p>
      </header>
    </div>
  );
};

export default App;
