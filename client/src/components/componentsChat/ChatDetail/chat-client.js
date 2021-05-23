import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { actFetchAllChatRoom } from '../../../actions/actChat';
import { USER_IMG } from '../../../constants/Service';
import './chat-client.scss';



const ChatClient = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    messageInput: '',
    newMessages: [],
    myMessage: [],
    nameRoom: '',
    userID: ''
  });

  const socket = io('http://localhost:9000', {
    withCredentials: true,
  });

  const { isLogin, dataUserLogin } = useSelector(currentState => currentState.login)

  // useEffect(() => {

  //   // client take data from server
  //   socket.on('newMessage-server-sent', (data) => {
  //   });

  //   // client send data to server
  //   // socket.emit("newMessage-client-sent","hello")
  //   dispatch(actFetchAllChatRoom());
  // }, [dispatch, socket])

  const handleInputOnChange = (e) => {
    setState(cS => ({ ...cS, [e.target.name]: e.target.value }))
  };

  const handleButtonSendMessage = (e) => {
    e.preventDefault();
    // const userID = dataUserLogin.user._id;
    // const data = this.state.messageInput;
    // if (data !== null && data !== undefined && data !== '') {
    //   // emit message to sever
    //   this.socket.emit('newMessage-client-sent', {
    //     chatRoomID: '',
    //     userID,
    //     data,
    //   });
    //   this.state.myMessage.push(data);
    //   this.setState({
    //     messageInput: '',
    //   });
    // }
  }

  if (isLogin === true) {
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
              <div id="chat_messages" className={dataUserLogin ? 'my-message' : 'other-message'}>
                <div className="profile other-profile">
                  <img src="" width="30" height="30" alt="" />
                  <span>Admin</span>
                </div>
                <div className="message other-message" />
                <div className="profile my-profile">
                  <span>{dataUserLogin ? dataUserLogin.user.userName : ''}</span>
                  <img
                    src={`${USER_IMG}/${dataUserLogin ? dataUserLogin.user.avatarUser : ''}`}
                    width="30"
                    height="30"
                    alt=""
                  />
                </div>
                <div className="message my-message">aaa</div>
              </div>              </div>

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
                value={state.messageInput}
                onChange={handleInputOnChange}
              />
              <button
                id="send"
                type="submit"
                onClick={handleButtonSendMessage}
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

export default ChatClient;
