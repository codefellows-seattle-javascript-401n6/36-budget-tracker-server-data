import React from 'react';
import MessageForm from './MessageForm';

class MessageItem extends React.Component {


  controlDelete = () => {
    const {
      onDestroy
    } = this.props
    onDestroy(this.props.message.id);
  };



  render() {
    return (
      <div>
        <div>
          {this.props.message.string}
        </div>
        <MessageForm name="update" onSubmit={this.props.onUpdate}
        message={this.props.message}
        />
        <button onClick={this.controlDelete}>
          DELETE MESSAGE
        </button>
      </div>
    )
  };

};

export default MessageItem;