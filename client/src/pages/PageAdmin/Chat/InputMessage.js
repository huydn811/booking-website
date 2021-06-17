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
			<input type="text" placeholder="Type something here..."
				name="messageInput"
				value={state.messageInput}
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
			</button>                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up">
				<path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></svg>
		</>
	)
}

InputMessage.propTypes = {

}

export default InputMessage
