import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { inflateCategory } from '../actions/categoryActions';

import middlewares from '../middleware/';

import combinedReducer from '../reducers/';
const store = createStore(combinedReducer,
  applyMiddleware(
    middlewares.logger,
    middlewares.validateCategory
  )
);

fetch('http://localhost:3000')
  .then(res => res.json())
  .then(json => {
    store.dispatch(inflateCategory(json));
  })

import MainPage from './MainPage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={MainPage} />
        </BrowserRouter>
      </Provider>
    )
  }
};
