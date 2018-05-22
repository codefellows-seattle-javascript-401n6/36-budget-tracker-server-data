import React from 'react';
import { connect } from 'react-redux';
import CategoryEdit from './CategoryEdit.jsx';
import ExpenseList from '../Expense/ExpenseList.jsx';
import ExpenseForm from '../Expense/ExpenseForm.jsx';


class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      overBudget: false
    }

    this.handleDestroy = this.handleDestroy.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleDestroy() {
    this.props.destroyCategory(this.props.id);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  finishEdit(category) {
    this.props.updateCategory(category);
    this.toggleEdit();
  }

  render() {
    if(this.state.isEditing) {
      return <CategoryEdit
          toggleEdit={this.toggleEdit}
          finishEdit={this.finishEdit}
          title={this.props.title}
          number={this.props.number}
          id={this.props.id}
        />
    }
    return <li className='list-item'>
        <span>{this.props.title} </span>
        <span>${this.props.number} </span>
        <button onClick={this.handleDestroy}>delete</button>
        <button onClick={this.toggleEdit}>Update</button>
        <ExpenseForm action="create" buttonText="Create" categoryId={this.props.id}/>
        <ExpenseList categoryId={this.props.id} />
      </li>
  }
}

export default CategoryItem;
