import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/index';
import messageReducer from '../reducers/message-reducer';
import reporter from '../middleware/reporter';
import thunk from '../middleware/thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//allows use of redux tab in chrome

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    thunk,
    reporter,
  ),
  )
);

export default store;