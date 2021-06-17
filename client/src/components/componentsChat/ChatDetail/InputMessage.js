import React, { useState } from 'react'
import PropTypes from 'prop-types'

const InputMessage = ({ handleButtonSendMessage }) => {

	const [state, setState] = useState({
		messageInput: '',
	});

	const handleInputOnChange = (e) => {
		setState(cS => ({ ...cS, [e.target.name]: e.target.value }))
	};

	const shallowHandleButtonSendMessage = () => {
		handleButtonSendMessage(state.messageInput)
		setState(cS => ({ ...cS, messageInput: '' }))
	}
	return (
		<>
			<input
				id="chat_input"
				value={state.messageInput}
				placeholder="Enter your message here..."
				name="messageInput"
				onChange={handleInputOnChange}
			/>
			<button
				id="send"
				type="button"
				onClick={shallowHandleButtonSendMessage}
			>
				<svg
					style={{ width: '24px', height: '24px' }}
					viewBox="0 0 24 24"
				>
					<path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
				</svg>
			</button>
		</>
	)
}

InputMessage.propTypes = {

}

export default InputMessage
