import React, { PureComponent } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import { actFetchChatRoomByIDReq } from "../../../actions/actChat";
import { USER_IMG } from "../../../constants/Service";
class ChatDetail extends PureComponent {
  //pure component k bi tac dong boi component cha
  constructor(props) {
    super(props);
    this.state = {
      idChatRoom: "",
      messageInput: "",
      messages: [],
      nameRoom: "",
      userID: "",
    };
    this.socket = null;
  }

  componentWillMount() {
    this.socket = io("http://localhost:9000", {
      withCredentials: true,
    });

    // client take data from server
    this.socket.on("newMessage-server-sent", (data) => {
      this.newMessage(data);
    });
    //client send data to server
    // this.socket.emit("newMessage-client-sent", "hello");
  }
  newMessage = (m) => {
    this.state.messages.push({
      message: m.data,
    });
  };
  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let idChatRoom = match.params.chatRoomID;
      this.props.fectChatRoomByID(idChatRoom);
      this.setState({
        idChatRoom,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { chatRoomID } = this.props.match.params;
    if (chatRoomID !== prevProps.match.params.chatRoomID) {
      this.props.fectChatRoomByID(chatRoomID);
    }
  }
  showMsg = (msg) => {
    var result = null;
    let arrMsg = msg.messageID.messages;
      result = arrMsg.map((msgItem, index) => {
        if (msgItem !== undefined) {
          return (
            <div className="chat-area-main">
              <div className="chat-msg">
                <div className="chat-msg-profile">
                  <img
                    className="chat-msg-img"
                    src={`${USER_IMG}/${msg.userID.avatarUser}`}
                    alt=""
                  />
                  <div className="chat-msg-date">
                    message was sent at {msg.messageID.TimeSendMessage}
                  </div>
                </div>
                <div className="chat-msg-content" key={index}>
                  <div className="chat-msg-text">{msgItem}</div>
                </div>
              </div>
              <div className="chat-msg owner">
                <div className="chat-msg-profile">
                  <img
                    className="chat-msg-img"
                    src={`${USER_IMG}/${this.props.userIsLogging.dataUserLogin.user.avatarUser}`}
                    alt=""
                  />
                  <div className="chat-msg-date">Message seen 2.50pm</div>
                </div>
                <div className="chat-msg-content">
                  <div className="chat-msg-text">
                    Tincidunt arcu non sodales😂
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    return result;
  };
  handleInputOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleOnclickSendMsg = () => {
    let { match } = this.props;
    let userID = this.props.userIsLogging.dataUserLogin.user._id;
    let userSendMessage = this.props.userIsLogging.dataUserLogin.user;
    let data = this.state.messageInput;
    if (data !== null && data !== undefined && data !== "") {
      //emit message to sever
      this.socket.emit("newMessage-client-sent", {
        chatRoomID: match.params.chatRoomID ,
        userID,
        data,
        userSendMessage 
      });
      this.setState({
        messageInput: "",
      });
    }
  };
  render() {
    let { listChatDetail } = this.props;
      return (
        <div className="chat-area">
          <div className="chat-area-header">
            <img
              className="chat-msg-img"
              src={`${USER_IMG}/${listChatDetail.userID.avatarUser}`}
              alt=""
            />
            <div className="chat-area-title">
              {listChatDetail.userID.userName}
            </div>
          </div>
          {this.showMsg(listChatDetail)}
          <div className="chat-area-footer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-video"
            >
              <path d="M23 7l-7 5 7 5V7z" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-paperclip"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
            </svg>
            <input
              type="text"
              placeholder="Type something here..."
              name="messageInput"
              value={this.state.messageInput}
              onChange={this.handleInputOnChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-smile"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
            </svg>
            <div
              style={{ marginLeft: "10px" }}
              id="send"
              type="submit"
              onClick={this.handleOnclickSendMsg}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-thumbs-up"
              >
                <path
                  fill="#006ae3"
                  d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    listChatDetail: state.itemEditing,
    userIsLogging: state.login,
  };
};
const mapDisPatchToProps = (dispatch, props) => {
  return {
    fectChatRoomByID: (chatRoomID) => {
      dispatch(actFetchChatRoomByIDReq(chatRoomID));
    },
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(ChatDetail);
