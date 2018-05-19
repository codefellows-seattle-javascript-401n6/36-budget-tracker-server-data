import React from 'react';


class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(ev){
    ev.preventDefault();
    let data = {
      name: ev.target.title.value,
      expense: ev.target.expense.value,
      category: this.props.category
    }
    this.props.update();
    return this.props.exCreate(data)
    
  }

  render(){
    return <form onSubmit={this.submit}>
      <input type="text" name="title" placeholder="Individual Expense"/>
      <input type="number" name="expense" placeholder="Expense"/>
      <input type="submit" value="Add Expense" />
    </form>
  }
}

export default ExpenseForm;