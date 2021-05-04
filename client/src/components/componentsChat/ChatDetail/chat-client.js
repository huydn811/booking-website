import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { actAddMessageReq, actFetchChatRoomByIDReq } from '../../../actions/actChat';

import './chat-client.scss';
import MessageList from './Message-List';

class ChatClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: '',
      newMessages: [],
      myMessage: [],
      nameRoom: '',
      userID: '',
    };
    this.socket = null;
  }

  componentWillMount() {
    this.socket = io('http://localhost:9000', {
      withCredentials: true,
    });

    // client take data from server
    this.socket.on('newMessage-server-sent', (data) => {
      this.newMessage(data);
    });
    // client send data to server
    // this.socket.emit("newMessage-client-sent", "hello");
  }

  // handle input message change
  handleInputOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // when have new message push in state
  newMessage = (m) => {
    this.state.newMessages.push({
      message: m.data,
    });
  }

  // handle click button send message
  handleButtonSendMessage = (e) => {
    e.preventDefault();
    const userID = this.props.userIsLogging.dataUserLogin.user._id;
    const data = this.state.messageInput;
    if (data !== null && data !== undefined && data !== '') {
      // emit message to sever
      this.socket.emit('newMessage-client-sent', {
        chatRoomID: '',
        userID,
        data,
      });
      this.state.myMessage.push(data);
      this.setState({
        messageInput: '',
      });
    }
  }

  render() {
    if (this.props.userIsLogging.isLogin === true) {
      return (
        <>
          <div className="flexbox">
            <div className="chat-box">
              <div className="chat-box-header">
                <h3>
                  Contact
                  <br />
                </h3>
              </div>
              {/* chat body */}
              <div id="chat_box_body" className="chat-box-body">
                <MessageList newMessages={this.state.newMessages} myMessage={this.state.myMessage} />
              </div>

              <div id="typing">
                <div>
                  <span className="n">Someone</span>
                  {' '}
                  is typing...
                </div>
              </div>
              <div className="chat-box-footer">
                <input
                  id="chat_input"
                  placeholder="Enter your message here..."
                  name="messageInput"
                  value={this.state.messageInput}
                  onChange={this.handleInputOnChange}
                />
                <button
                  id="send"
                  type="submit"
                  onClick={this.handleButtonSendMessage}
                >
                  <svg
                    style={{ width: '24px', height: '24px' }}
                    viewBox="0 0 24 24"
                  >
                    <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <></>
    );
  }
}

const mapStateToProps = (state) =>
  // get
  ({
    userIsLogging: state.login,
  });
const mapDispatchToProps = (dispatch, props) => ({
  onAddMessage: (message) => {
    dispatch(actAddMessageReq(message));
  },
  onChatRoomByID: (chatRoomID) => {
    dispatch(actFetchChatRoomByIDReq(chatRoomID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatClient);
