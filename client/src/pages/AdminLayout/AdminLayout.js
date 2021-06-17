import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import "../../assets/scss/style.scss";
import "../../assets/scss/components.scss"
export const AdminLayout = ({ children }) => {
	return (
		<>
			<SideBar />
			<NavBar />
			{children}
		</>
	)
}
