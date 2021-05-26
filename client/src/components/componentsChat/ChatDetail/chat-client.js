import React, { useEffect, useState, useContext, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../../context/socket';

import { actCreateChatRoomReq, actionGetAllMessageReq } from '../../../actions/actChat';
import { actionGetCurrentUser } from '../../../actions/actCurrentUser';

import { USER_IMG } from '../../../constants/Service';
import './chat-client.scss';
import { Button } from 'react-bootstrap';

const ChatClient = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    messageInput: '',
    newMessages: [],
    myMessage: [],
    nameRoom: '',
    userID: ''
  });


  const socket = useContext(SocketContext);

  const { login: { isLogin, dataUserLogin = {} } } = useSelector(currentState => currentState);
  const currentUserId = dataUserLogin.user._id

  useEffect(() => {
    dispatch(actionGetAllMessageReq())
  }, [dispatch]);

  const { currentUserState: { currentUser: { chatRoomID } }, chatRoom: { messages } } = useSelector(currentState => currentState);
  useEffect(() => {
    dispatch(actionGetCurrentUser(currentUserId));

    //   // client take data from server
    //   socket.on('newMessage-server-sent', (data) => {
    //   });

    //   // client send data to server
    //   // socket.emit("newMessage-client-sent","hello")
    //   dispatch(actFetchAllChatRoom());
  }, [dispatch, currentUserId])


  const handleInputOnChange = (e) => {
    setState(cS => ({ ...cS, [e.target.name]: e.target.value }))
  };

  const handleConnect = () => {
    dispatch(actCreateChatRoomReq({
      userID: currentUserId,
      roomMaster: 'admin',
      content: 'hello'
    })).then(() => {
      dispatch(actionGetCurrentUser(currentUserId));
    })

  }

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

  console.log({ messages })
  if (isLogin) {
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
            {
              !chatRoomID ? (
                <Button onClick={handleConnect} variant="secondary" className="text-dark fs-18">Chat now</Button>
              ) : (
                <>
                  {/* chat body */}
                  <div id="chat_box_body" className="chat-box-body">
                    {
                     messages && Object.keys(messages) && messages?.messages.map((mess) => {
                        const { content, userID } = mess
                        console.log(userID._id)
                        return (
                          <>
                            {
                              currentUserId === userID._id ? (
                                <div className="client-mess profile my-profile">
                                  <div className="">
                                    {/* <span>{dataUserLogin ? dataUserLogin.user.userName : ''}</span> */}
                                    <span>{userID.userName}</span>
                                    <img
                                      src={`${USER_IMG}/${dataUserLogin ? dataUserLogin.user.avatarUser : ''}`}
                                      width="30"
                                      height="30"
                                      alt=""
                                    />
                                  </div>
                                  <div className="message my-message"> {content} </div>
                                </div>
                              ) : (
                                <div className="admin-mess">
                                  <div className="profile other-profile">
                                    <img src="https://i.pravatar.cc/30" width="30" height="30" alt="" />
                                    <span>Admin</span>
                                  </div>
                                  <div className="message other-message" >{content}</div>
                                </div>
                              )
                            }


                          </>
                        )
                      })
                    }


                  </div>

                  <div id="typing">
                    <div>
                      <span className="n">Someone</span> is typing...
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
                </>
              )
            }
          </div>
        </div>
      </>
    );
  }
  return (
    <></>
  );
}

export default memo(ChatClient);
