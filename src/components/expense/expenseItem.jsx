import React from 'react';
import ExpenseForm from './expenseForm.jsx';
import {connect} from 'react-redux';
import { 
  expenseUpdate, 
  expenseDelete, 
} 
  from '../../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleDelete() {
    this.props.expenseDelete(this.props.id);
  }

  cancel() {
    this.toggleEdit();
  }

  render() {
    if(this.state.isEditing === true) {
      return (
        <div>
          <ExpenseForm action='update'
            expenseId={this.props.id} 
            name={this.props.name}
            price={this.props.price} 
            toggleEdit={this.toggleEdit}
            cancel={this.cancel}>
          </ExpenseForm>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.name}
          ${this.props.price}
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    }
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

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseItem);