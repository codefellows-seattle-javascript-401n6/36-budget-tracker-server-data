import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../../actions/category-actions.js';

import CategoryItem from './categoryItem.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete(category) {
    this.props.categoryDestroy(category);
  }

  handleUpdate(category) {
    this.props.categoryUpdate(category);
  }

  displayAllCategories() {
    return this.props.categories.map(category => {
      return <CategoryItem 
        key={category.id} 
        category={category}
        categoryDestroy={this.handleDelete}
        categoryUpdate={this.handleUpdate}
        isEditing={category.isEditing}>
      </CategoryItem>;
    });
  }

  render() {
    return (
      <div>
        <h2>Category Budget List:</h2>
        <ul>{this.displayAllCategories()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ // get something from store
  categories: state.categoryStore.categories,
});

const mapDispatchToProps = dispatch => { // send something to store
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(CategoryList);