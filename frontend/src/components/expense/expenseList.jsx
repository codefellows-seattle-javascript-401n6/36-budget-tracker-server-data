import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './expenseItem.jsx';
import { expenseUpdate, expenseDelete } from '../../actions/expense-actions.js';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  handleDelete(expenseId) {
    this.props.expenseDelete(expenseId);
  }

  displayAllExpenses() {
    let filteredList = this.props.expenses.filter(expense => {
      return expense.categoryId === this.props.categoryId
    });
    return filteredList.map(expense => {
      return <ExpenseItem
        categoryId={this.props.categoryId}
        key={expense.id}
        id={expense.id}
        name={expense.name}
        price={expense.price}
        delete={this.handleDelete}
        toggleEdit={expense.toggleEdit} 
      />;
    });
  }

  render() {
    return (
      <div>
        <h2>Current Expenses List:</h2>
        <ul>{this.displayAllExpenses()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { expenses: state.expenseStore.expenses };
};

const mapDispatchToProps = dispatch => {
  return {
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseList);