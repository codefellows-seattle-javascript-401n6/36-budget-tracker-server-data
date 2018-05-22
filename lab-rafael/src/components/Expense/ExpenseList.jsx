import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import { connect } from 'react-redux';
import { destroyExpense, updateExpense } from '../../actions/expenseActions';

const mapStateToProps = state => {
  return { expenses: state.expense.expenses };
}

const mapDispatchToProps = dispatch => {
  return {
    updateExpense: expense => dispatch(updateExpense(expense)),
    destroyExpense: expense => dispatch(destroyExpense(expense))
  };
};

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy(expenseId) {
    this.props.destroyExpense(expenseId);
  }

  render() {
    let expenses = this.props.expenses.filter(expense => expense.categoryId === this.props.categoryId);
    
    return (
      <div>
        <ul>
          {expenses.map(expense => {
            return <ExpenseItem id={expense.id} key={expense.id}
              name={expense.name} price={expense.price}
              delete={this.handleDestroy}
              toggleEdit={this.toggleEdit}
              />
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
