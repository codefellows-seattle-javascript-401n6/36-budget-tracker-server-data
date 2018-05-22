import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { createExpense, updateExpense } from '../../actions/expenseActions';

const mapDispatchToProps = dispatch => {
  return {
    createExpense: expense => dispatch(createExpense(expense)),
    updateExpense: expense => dispatch(updateExpense(expense))
  };
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name || '',
      price: this.props.price || 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let { name, price } = this.state;

    if(this.props.action === 'create') {
      let id = uuidv1();
      let timestamp = Date.now();
      let categoryId = this.props.categoryId
      this.props.createExpense({ name, price, id, timestamp, categoryId });
      this.setState({ name: '', price: 0 });
    }

    if(this.props.action === 'update') {
      let id = this.props.id;
      let categoryId = this.props.categoryId;
      this.props.updateExpense({ name, price, id, categoryId });
      this.props.toggleEdit();
      this.setState({ name: '', price: 0 });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input onChange={this.handleChange} type="text"
          placeholder="name" name="name" value={this.state.name} />

        <input onChange={this.handleChange} type="number"
          placeholder="price" name="price" value={this.state.price} />

        {this.props.action === 'update' ? <button onClick={this.props.cancel}>Cancel</button> : ''}
        <input type="submit" value={this.props.buttonText} />
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(ExpenseForm);
