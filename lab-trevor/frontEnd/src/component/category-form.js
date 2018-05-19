import React from 'react';


class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(ev){
    ev.preventDefault();
    let data = {
      name: ev.target.title.value,
      budget: ev.target.budget.value
    }
    return this.props.createCategory(data)
  }

  render(){
    return <form onSubmit={this.submit}>
      <input type="text" name="title" placeholder="title"/>
      <input type="number" name="budget" placeholder="Content"/>
      <input type="submit" value="Add Category" />
    </form>
  }
}

export default NoteForm;