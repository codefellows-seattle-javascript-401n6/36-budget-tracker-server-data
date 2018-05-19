import React from 'react'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {inflateData} from '../action/budget-actions';

import logger from '../middleware/logger';
import validate from '../middleware/validator';

import combinedReducer from '../reducer/';
const store = createStore(combinedReducer, applyMiddleware(logger, validate));


fetch('http://localhost:3000')
.then(res => res.json())
.then(json => {
  console.log('json:', json);
  store.dispatch(inflateData(json));
})

import Dashboard from './dashboard';

class App extends React.Component {
  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={Dashboard}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App