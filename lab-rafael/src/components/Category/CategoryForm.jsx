import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { createCategory } from '../../actions/categoryActions.js';

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(createCategory(category))
  };
};

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      number: 0
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, number } = this.state;
    const id = uuidv1();
    const timestamp = Date.now();
    this.props.createCategory({ title, number, id, timestamp });
    this.setState({ title: '', number: 0 });
  }

  render() {
    const { title, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-wrapper'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onBlur={this.onBlur}
            onChange={this.handleChange}
          />
          <label htmlFor='number'>Budget</label>
          <input
            min="1"
            type='number'
            id='number'
            value={number}
            onBlur={this.onBlur}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    );
  }
}

const CategoryForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default CategoryForm;
