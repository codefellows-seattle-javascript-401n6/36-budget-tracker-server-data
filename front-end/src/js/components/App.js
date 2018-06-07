import React from 'react';
import {Provider} from 'react-redux';
import Dashboard from './Dashboard';
import store from '../lib/store';
import '../../styles/style.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard>
        </Dashboard>
      </Provider>
    )
  }
};

export default App;