import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem.jsx';
import { destroyCategory, updateCategory } from '../../actions/categoryActions.js';

const mapStateToProps = state => {
  return { categories: state.category.categories }
};

const mapDispatchToProps = dispatch => {
  return {
    destroyCategory: category => dispatch(destroyCategory(category)),
    updateCategory: category => dispatch(updateCategory(category))
  };
};

class ConnectedList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDestroy(category) {
    this.props.destroyCategory(category);
  }

  handleUpdate(category) {
    this.props.updateCategory(category);
  }

  render() {
    let categories = this.props.categories;
    console.log('categories from list', categories);

    return <div>
      <ul className='list-group'>
        {categories.map(category => {
          return <CategoryItem title={category.title}
            number={category.number}
            id={category.id}
            destroyCategory={this.handleDestroy}
            updateCategory={this.handleUpdate}
            key={category.id} />
        })}
      </ul>
    </div>
  }
}

const CategoryList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default CategoryList;
