import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './category-item.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
  }

  displayAllCategories() {
    return this.props.categories.map(category => {
      console.log('category list display all current category', category);
      return <CategoryItem key={category._id} id={category._id} name={category.name} budget={category.budget} isEditing={category.isEditing}></CategoryItem>
    });
  }

  render() {
    return (
      <div>
        <h2>Current budget list:</h2>
        <ol>{this.displayAllCategories()}</ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);