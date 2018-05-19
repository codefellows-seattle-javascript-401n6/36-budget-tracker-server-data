import React from 'react';

import CategoryItem from './category-item.js';

class CategoryList extends React.Component {
  constructor(props){
    super(props);
  }

  

  list(){
    console.log('cat props', this.props)
    return this.props.categories.map((categories, index) => {

      return <CategoryItem name={categories.name} budget={categories.budget} timestamp={categories.timestamp}
      key={categories.id} index={index} id={categories.id}
      catUpdate={this.props.catUpdate}
      catDestroy={this.props.catDestroy}
      />
    });
  }

  render(){
    
    return <ul>
      {this.list()}
      </ul>
  }
}

export default CategoryList;