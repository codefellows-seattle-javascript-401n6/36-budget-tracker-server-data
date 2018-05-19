import React from 'react';
import {Link} from 'react-router-dom';

class UpdateCategory extends React.Component {
  constructor(props){
    super(props);

    this.save = this.save.bind(this);
  }

  save(ev){
    ev.preventDefault();
    let data = {
      name: ev.target.title.value,
      budget: ev.target.budget.value,
      index: this.props.index
    }
    this.props.catUpdate(data);
    this.props.toggleEdit();
  }

  render(){
    return <div>
      <form onSubmit={this.save}>
      <div>Title: 
        <input type="text" name="title"/>
      </div>

      <div>Budget:
      <input type="number" name="budget" />
      </div>
      <button type="submit" value="SAVE">SAVE</button>
    </form>
    <button onClick={this.props.toggleEdit}>Cancel</button>
    </div>
  }
}

export default UpdateCategory;