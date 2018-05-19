import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UpdateCategory from './update-category'
import ExpenseForm from './expense-form'
import ExpenseList from './expense-list'
import {
  exCreate
} from '../action/expense-actions';


class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      expenses: []
    }
    this.update = this.update.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.remove = this.remove.bind(this);
  }
  update(){
    let newState = [...this.state.expenses];
    let category = this.props.category;
     let newExpenses = newState.filter(function (el) {
        return el.category === category
      });
      
      return this.setState(this.state.expenses: newExpenses)
  }
  toggleEdit(){
     this.setState({isEditing: !this.state.isEditing});
  }

  remove(){
    
    let data = {
      id: this.props.id
    }
    this.props.catDestroy(data);
  }

  render(){
    
    if(this.state.isEditing) {
      return <UpdateCategory catUpdate={this.props.catUpdate}
        id={this.props.id}
        index={this.props.index}
        toggleEdit={this.toggleEdit}
        cancel={this.toggleEdit}/>
    }
    return <div>
      <div onDoubleClick={this.toggleEdit} index={this.props.index} id={this.props.id}>
      <div>Name: {this.props.name}</div>
      <div>Budget: $ {this.props.budget}</div>
      <div>Created {this.props.timestamp}</div>
       <button onClick={this.remove}>Remove</button>
      <button onClick={this.toggleEdit}>Edit</button>
      </div>
      <ExpenseForm exCreate={this.props.exCreate} category={this.props.id} update={this.update}/>
      <ExpenseList id={this.props.id} expenses={this.state.expenses} />
      </div>
  }
}
const mapStateToProps = state => {
  return {expenses: state.expenseReducer.expenses};
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    exCreate: (data) => dispatch(exCreate(data)),
    
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);