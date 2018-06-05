import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import messageReducer from '../reducers/message-reducer';
import reporter from '../middleware/reporter';
import thunk from '../middleware/thunk';


const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    reporter,
  ),
);

export default store;