import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      string: ''
    };
  }

controlChange = (event, targetInputValue) => {
  let newState = {};
  newState[targetInputValue] = event.target.value;
  this.setState(newState);
};

controlSubmit = (event) => {
  event.preventDefault();
  if (this.props.name === 'update') {
    console.log('not done yet!');
  } else {
    let messageObj = {
      string: this.state.string,
    };
    this.props.onSubmit(messageObj);
    this.setState({
      string: '',
    });
  }
};

render() {
  let buttonName = 'Submit'
  if(this.props.name === 'update') {
    buttonName = 'Update';
  };
  return (
    <form onSubmit={this.controlSubmit}>
      <div>
        <input type="text" placeholder="Write Here!" onChange={(event) => 
          this.controlChange(event, 'string')}
          value={this.state.string} />
        <button type="submit">{buttonName}</button>
      </div>
    </form>
  )
};

}

export default MessageForm;