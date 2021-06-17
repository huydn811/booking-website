import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chat-client.scss';
import ChatDetail from './ChatDetail';



const ChatClient = () => {
  const dispatch = useDispatch();
  const {
    authState: { token },
  } = useSelector(currentState => currentState);



  if (token) {
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
            <ChatDetail />
          </div>
        </div>
      </>
    );
  }

}

export default ChatClient
