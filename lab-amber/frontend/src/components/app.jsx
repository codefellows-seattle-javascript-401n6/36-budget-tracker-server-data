import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {categoryInflate} from '../actions/category-actions.js';

import reducers from '../reducers/';

import middlewares from '../middleware/';
import {logger, thunk, validator} from '../middleware/';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middlewares.logger, middlewares.validator, middlewares.thunk),
);

fetch('http://localhost:3000/api/categories')
.then(res => res.json())
.then(json => {
  console.log('json:', json);
  store.dispatch(categoryInflate(json));
});

import Dashboard from './dashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Dashboard} />
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;