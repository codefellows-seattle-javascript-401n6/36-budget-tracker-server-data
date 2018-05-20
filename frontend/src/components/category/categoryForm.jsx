import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
} from '../../actions/category-actions.js';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      name: '',
      budget: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.buttonText === 'create') {
      this.props.categoryCreate({...this.state});
    }
    else {
      let newValue = {}; 
      Object.assign(newValue, this.props.category, this.state);
      console.log('new val', newValue);
      this.props.toggleEdit();
      this.props.categoryUpdate({...newValue});
    }
  }

  render() {
    return (
      <form className="category-form" 
        onSubmit={this.handleSubmit}>
        <input 
          className="category-name-input"
          onChange={this.handleChange} 
          name="name" 
          type="text" 
          placeholder="name" 
          value={this.state.name}
        />
        <input 
          className="category-budget-input"
          onChange={this.handleChange} 
          name="budget" 
          type="text" 
          placeholder="budget" 
          value={this.state.budget}
        />
        <button 
          type="submit">{this.props.buttonText === 'create' ? 'Submit' : 'Update'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryStore.categories
});

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
    categoryUpdate: val => dispatch(categoryUpdate(val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(CategoryForm);