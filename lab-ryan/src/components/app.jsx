import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import reducers from '../reducer/';

import middleware from '../middleware/';

//place redux dev tools just after reducers and before anything else
const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware.logger, middleware.validator)

);

import Main from './mainPage.jsx';


class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path='/' component={Main} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;