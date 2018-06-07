import React from 'react';
import {connect} from 'react-redux';
import {
  messageRead,
  messageCreate,
  messageDelete,
  messageUpdate,
} from '../actions/message-actions';
import MessageForm from './MessageForm';
import MessageItem from './MessageItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    props.dashboardReadMessages();
  }

  render() {
    return (
      <div>
        <MessageForm onSubmit={this.props.dashboardCreateMessage} />
        {
          this.props.messages.map(element => {
            return <MessageItem key={element.id}
            message={element} onDestroy={this.props.dashboardDeleteMessage} 
            onUpdate={this.props.dashboardUpdateMessage}
            />
          })
        }
        {this.props.error && <div>ERROR:{this.props.error}</div>}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
    error: state.messageReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dashboardReadMessages: () => dispatch(messageRead()),
    dashboardCreateMessage: (messageObj) => dispatch(messageCreate(messageObj)),
    dashboardDeleteMessage: (id) => dispatch(messageDelete(id)),
    dashboardUpdateMessage: (messageObj) => dispatch(messageUpdate(messageObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);