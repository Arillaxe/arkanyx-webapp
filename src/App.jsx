import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { Base } from './pages/common/components';
import { News } from './pages';

import './styles.styl';


const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={() => <Base><News /></Base>} />
      </Switch>
    </Router>
  </div>
);

export default App;
