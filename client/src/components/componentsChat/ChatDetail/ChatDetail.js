import { Spin } from 'antd';
import React, { memo, useEffect, useLayoutEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import { onSocket } from '../../../redux/actions/temp';
import { addChatRoomType, addMessageType, getAllMessageType, getChatRoomById, getChatRoomByIdType, getMeType } from '../../../redux/actionTypes';
import './chat-client.scss';
import InputMessage from './InputMessage';



const ENDPOINT = 'http://localhost:9000';
const socket = socketIOClient(ENDPOINT);

const ChatDetail = () => {
	const dispatch = useDispatch();

	const scrollTopBottom = (bonus = 0) => {
		let el = document?.getElementById('chat_box_body');
		if (el) {
			el.scrollTop = el.scrollHeight + bonus
		}
	}

	useLayoutEffect(() => {
		scrollTopBottom();
	}, []);

	const { authState: { token }
	} = useSelector(currentState => currentState);

	useLayoutEffect(() => {
		if (token) {
			dispatch({ type: getMeType.request });
		}
	}, [dispatch, token]);


	const { profileState: { profile },
		authState: { authProfile },
		chatState: { listMessTemp, clientMessages },
		loadingState: { loadingGetChatRoomById, loadingGetMe }
	} = useSelector(currentState => currentState);

	const currentUserId = authProfile?._id || profile?._id

	const handleConnect = () => {
		dispatch({
			type: addChatRoomType.request, payload: {
				userID: currentUserId,
			}
		})
	}

	useLayoutEffect(() => {
		if (token && currentUserId) {
			dispatch({ type: getChatRoomById.request, payload: currentUserId });
		}
	}, [currentUserId, token, dispatch])

	useEffect(() => {
		const listener = (payload) => {
			if (payload.data.role !== 1) {
				dispatch(onSocket(payload.data))
			}
		};
		socket.on('newMessage-server-sent', listener)

		return () => socket.off('newMessage-server-sent', listener);
	}, [currentUserId, dispatch])

	const handleButtonSendMessage = (messageInput) => {
		const payload = {
			userID: currentUserId,
			clientId: currentUserId,
			message: messageInput,
			role: 1
		}

		socket.emit("newMessage-client-sent", payload)
		dispatch(onSocket(payload))
		scrollTopBottom(20);
	}

	if (loadingGetChatRoomById) return <Spin />
	const flag = Object.keys(clientMessages).length > 0 ? true : false

	if (loadingGetMe) return <Spin />
	return (

		<>
			{/* chat body */}
			<div id="chat_box_body" className="chat-box-body">
				{
					false ? (
						<Button > Connect Chat</Button>
					) : (
						<>
							{
								flag
								&& clientMessages && clientMessages?.message?.map((mess) => {
									const { content, userID } = mess
									return (
										<div key={mess._id} style={{ paddingBottom: 6 }}>
											{
												currentUserId !== userID ? (
													<div className="client-mess profile my-profile px-2 mt-2 text-left" >
														<div className="">
														</div>
														<div className="message my-message p-2 mb-2"
															style={{
																background: 'lightblue',
																display: 'inline',
															}}
														> {content} </div>
													</div>
												) : (
													<div className="admin-mess text-right px-2 mb-3 text-right">
														<div className="profile other-profile">
															{/* <img src="https://i.pravatar.cc/30"
                          style={{ borderRadius: '50%' }}
                          width="30" height="30" alt="" />
                        <span>Admin</span> */}
														</div>
														<div className="message other-message box-chat-admin text-white p-2"
															style={{
																background: 'gray',
																display: 'inline'
															}}
														>{content}</div>
													</div>
												)
											}


										</div>
									)
								})
							}

						</>
					)
				}

				{
					listMessTemp && listMessTemp.map((mess) => {
						const { message, role } = mess
						return (
							<div key={mess._id} style={{ paddingBottom: 6 }}>
								{
									role === 0 ? (
										<div className="client-mess profile my-profile px-2 mt-2 text-left" >
											<div className="">
											</div>
											<div className="message my-message p-2 mb-2"
												style={{
													background: 'lightblue',
													display: 'inline',
												}}
											> {message} </div>
										</div>
									) : (
										<div className="admin-mess text-right px-2 mb-3 text-right">
											<div className="profile other-profile">

											</div>
											<div className="message other-message box-chat-admin text-white p-2"
												style={{
													background: 'gray',
													display: 'inline'
												}}
											>{message}</div>
										</div>
									)
								}


							</div>
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
				<InputMessage
					handleButtonSendMessage={handleButtonSendMessage}
				/>
			</div>
		</>

	);
}

export default memo(ChatDetail)
