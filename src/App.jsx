import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import store from './lib/store';

import { Base } from './pages/common';
import { News } from './pages';

import './styles.styl';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={() => <Base><News /></Base>} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
