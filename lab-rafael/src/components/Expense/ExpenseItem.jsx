import React from 'react';
import ExpenseForm from './ExpenseForm.jsx';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }

    this.handleDestroy = this.handleDestroy.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleDestroy() {
    this.props.delete(this.props.id);
  }

  cancel() {
    this.toggleEdit();
  }

  render() {
    if(this.state.isEditing) {
      return (
        <li>
          <ExpenseForm action='update' buttonText="Update"
            id={this.props.id} name={this.props.name}
            price={this.props.price} toggleEdit={this.toggleEdit}
            cancel={this.cancel} />
        </li>
      )
    } else {
      return (
        <li>
          {this.props.name}
          ${this.props.price}
          <button onClick={this.handleDestroy}>delete</button>
          <button onClick={this.toggleEdit}>Update</button>
        </li>
      )
    }
  }
}
