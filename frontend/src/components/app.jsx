import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { inflateData } from '../actions/category-actions.js';

import combineReducers from '../reducers/';
import middlewares from '../middleware/';

// import {logger, validator} from '../middleware/';

const store = createStore(combineReducers,
  applyMiddleware(
    middlewares.logger,
    middlewares.validator
  )
  // applyMiddleware(logger, validator)
);

fetch('http://localhost:3000')
  .then(res => res.json())
  .then(json => {
    console.log('json:', json);
    store.dispatch(inflateData(json));
  });

import MainPage from './mainPage.jsx';

class App extends React.Component {
  render() {
    return (
      <main className="main-content">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={MainPage} />
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;