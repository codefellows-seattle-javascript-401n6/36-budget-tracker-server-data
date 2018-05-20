import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy,
} from '../../actions/category-actions.js';

import CategoryForm from './categoryForm.jsx';
import ExpenseForm from '../expense/expenseForm.jsx';
import ExpenseList from '../expense/expenseList.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.handleDelete = this.handleDelete.bind(this),
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(ev) {
    this.setState({isEditing: !this.state.isEditing});
    // this.props.categoryUpdate({category: this.props.category, isEditing: true, id: this.props.id});
  }

  toggleOffEdit(ev) {
    this.props.categoryUpdate({isEditing: false, id: this.props.category.id});
  }

  handleDelete(ev) {
    ev.preventDefault();
    this.props.categoryDestroy(this.props.category.id);
  }

  render() {
    if(this.state.isEditing === true) {
      return (
        <div className="category-item">
          <CategoryForm name="update"
            category={this.props.category}
            toggleEdit={this.toggleEdit}>
          </CategoryForm>
        </div>
      );
    }
    return (
      <li key={this.props.category.id} id={this.props.category.id}>
        {this.props.category.name}: ${this.props.category.budget} 
        <button 
          id={this.props.category.id} 
          onClick={this.handleDelete}>
          Delete
        </button>
        <button 
          id={this.props.category.id} 
          onClick={this.toggleEdit}>
          Update
        </button>
        <h5>Add an Expense</h5>
        <ExpenseForm categoryId={this.props.category.id} buttonText='create' />
        <ExpenseList categoryId={this.props.category.id} />
      </li> 
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryStore.categories
});
    
const mapDispatchToProps = dispatch => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: categoryId => dispatch(categoryDestroy(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);