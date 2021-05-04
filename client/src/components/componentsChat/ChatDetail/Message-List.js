import React, { Component } from 'react';
import MessageItem from './Message-Item';

class MessageList extends Component {
  render() {
    return <MessageItem newMessage={this.props.newMessages} myMessageItem={this.props.myMessage} />;
  }
}

export default MessageList;
