import React from 'react';
import Dashboard from './category/dashboard.jsx';
// import ExpenseList from './expense/expenseList.jsx';

class MainPage extends React.Component {
  render() {
    return <React.Fragment>
      <Dashboard />
      {/* <ExpenseList /> */}
    </React.Fragment>;
  }
}

export default MainPage;