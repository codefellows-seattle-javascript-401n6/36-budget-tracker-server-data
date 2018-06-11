import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy,
} from '../actions/category-actions.js';

import CategoryForm from './category-form.jsx';
import ExpenseForm from './expense-form.jsx';
import ExpenseList from './expense-list.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(event) {
    let id = event.target.id;
    this.props.categoryUpdate({isEditing: true, _id: id});;
  }

  toggleOffEdit(event) {
    let id = event.target.id;
    this.props.categoryUpdate({isEditing: false, _id: id});;
  }

  handleDelete(event) {
    event.preventDefault();
    let _id = event.target._id;
    this.props.categoryDestroy(_id);
  }

  render() {
    if (this.props.isEditing === true) {
      return (
        <div>
          <CategoryForm name="update" id={this.props.id}></CategoryForm><button onClick={this.toggleOffEdit} id={this.props.id}>Cancel</button>
        </div>
      )
    }
    return (
      <li key={this.props.key} id={this.props.id}>
        <h3>{this.props.name}: ${this.props.budget}<button id={this.props.id} onClick={this.handleDelete}>X</button> <button id={this.props.id} onClick={this.toggleEdit}>Edit</button></h3> 
        <ExpenseForm categoryId={this.props.catId} name="create" buttonText="Add Expense" />
        <ExpenseList categoryId={this.props.catId}/>
      </li>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (values) => dispatch(categoryUpdate(values)),
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);