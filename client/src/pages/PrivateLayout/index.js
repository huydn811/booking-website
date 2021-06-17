import React from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import ChatClient from '../../components/componentsChat/ChatDetail/chat-client'

export const PrivateLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<ChatClient />
			<Footer />
		</>
	)
}
