import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UpdateExpense from './update-expense'

import {
  exUpdate,
  exDelete
} from '../action/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    }
    
    this.toggleEdit = this.toggleEdit.bind(this);
    this.remove = this.remove.bind(this);
  }

  toggleEdit(){
     this.setState({isEditing: !this.state.isEditing});
  }

  remove(){
    
    let data = {
      id: this.props.id
    }
    this.props.exDelete(data);
  }

  render(){
     if(this.state.isEditing) {
      return <UpdateExpense exUpdate={this.props.exUpdate}
        id={this.props.id}
        index={this.props.index}
        toggleEdit={this.toggleEdit}
        cancel={this.toggleEdit}/>
    }
    return <div onDoubleClick={this.toggleEdit} index={this.props.index} id={this.props.id}>
      <div>Item: {this.props.item}</div>
      <div>Expense: $ {this.props.expense}</div>
      <div>Created {this.props.timestamp}</div>
       <button onClick={this.remove}>Remove</button>
      <button onClick={this.toggleEdit}>Edit</button>
      </div>
    }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    exUpdate: (data) => dispatch(exUpdate(data)),
    exDelete: (data) => dispatch(exDelete(data))
  }
};


export default connect(null, mapDispatchToProps)(ExpenseItem);