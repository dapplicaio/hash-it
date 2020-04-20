import React from 'react';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'

import Landing from './Landing'
import Hash from './Hash'
import SnackBar from 'components/common/SnackBar'

import reducers from '../reducers';

function App() {
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/hash" component={Hash} />
        </Switch>
        <SnackBar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
