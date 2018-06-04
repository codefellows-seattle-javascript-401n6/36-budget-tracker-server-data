import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
} from '../actions/category-actions.js';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: 0,
      isEditing: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    }
    this.setState(newState);
  }

  handleBudgetChange(event) {
    let newState = {
      budget: event.target.value
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    let submitFormName = this.props.name;

    if (this.props.name === 'create') {
      console.log('1. props name', this.props.name);
      let newCategory = Object.assign({}, this.state);
      fetch('http://localhost:3000/api/categories', {
        body: JSON.stringify(this.state),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => {
        console.log('2. response', response);
        return response.json();
      })
      .then(json => {
        console.log('3. new cat json', json[0]);
        this.props.categoryCreate(json[0]);
      });
    } else if (this.props.name === 'update') {
      console.log('1. update props name', this.props.name);
      console.log('2. update event target id', event.target.id);
      let updatedCategory = Object.assign({}, this.state, {_id: event.target.id});
      
      fetch(`http://localhost:3000/api/categories?=${event.target.id}`,{
        body: JSON.stringify(updatedCategory),
        headers: {
          'content-type': 'application/json'
        },
        method: 'PUT'
      })
      .then(response => {
        console.log('3. response', response);
        return response.json();
      })
      .then(json => {
        console.log('3. updated json', json);
      });
      // let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
      // this.props.categoryUpdate(this.state);
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} id={this.props.id}>
        <input onChange={this.handleNameChange} type="text" placeholder="category name"/>
        <input onChange={this.handleBudgetChange} name="budget" type="text" placeholder="budget amount"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
    categoryUpdate: val => dispatch(categoryUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);