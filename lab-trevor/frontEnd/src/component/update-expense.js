import React from 'react';
import {Link} from 'react-router-dom';

class UpdateExpense extends React.Component {
  constructor(props){
    super(props);

    this.save = this.save.bind(this);
  }

  save(ev){
    ev.preventDefault();
    let data = {
      item: ev.target.title.value,
      expense: ev.target.budget.value,
      id: this.props.id
    }
    
    this.props.exUpdate(data);
    this.props.toggleEdit();
  }

  render(){
    return <div>
      <form onSubmit={this.save}>
      <div>Item: 
        <input type="text" name="title"/>
      </div>

      <div>Expense:
      <input type="number" name="budget" />
      </div>
      <button type="submit" value="SAVE">SAVE</button>
    </form>
    <button onClick={this.props.toggleEdit}>Cancel</button>
    </div>
  }
}

export default UpdateExpense;