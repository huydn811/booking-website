
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AllTourPage from '../pages/AllTourPage';
import PageDashBoard from '../pages/dashboard';
import DetailPage from '../pages/DetailPage';
import Chat from '../pages/PageAdmin/Chat/Chat';
import PageAddEmployee from '../pages/PageAdmin/Employee/AddEmployee';
import PageAllEmployee from '../pages/PageAdmin/Employee/AllEmployee';
import PageEditEmployee from '../pages/PageAdmin/Employee/EditEmployee';
import PageAddTour from '../pages/PageAdmin/Tours/AddTour';
import PageAllTour from '../pages/PageAdmin/Tours/AllTour';
import PageEditTour from '../pages/PageAdmin/Tours/EditTour';
import PageAddUser from '../pages/PageAdmin/Users/AddUser';
import PageAllUser from '../pages/PageAdmin/Users/AllUser';
import PageEditUser from '../pages/PageAdmin/Users/EditUser';
import HomePage from '../pages/Home/homepage';
import { useSelector } from 'react-redux';
import { history } from '../redux/store';


const PrivateRoute = props => {

	const {
		authState: { token },
	} = useSelector((currentState) => currentState);

	if (token) {
		<Redirect to="/" />
	}

	return (
		<div>
			<Route path="/all-tour" exact component={AllTourPage} />
			<Route path="/all-tour/:tourID" exact component={DetailPage} />

			<Route
				exact
				path="/admin/dashboard"
				component={PageDashBoard}
			/>
			<Route path="/admin/all-tour" component={PageAllTour} />
			<Route path="/admin/add-tour" component={PageAddTour} />
			<Route path="/admin/edit-tour" component={PageEditTour} />
			<Route
				exact
				path="/admin/all-user"
				component={PageAllUser}
			/>
			<Route path="/admin/add-user" component={PageAddUser} />
			<Route
				exact
				path="/admin/edit-user"
				component={PageEditUser}
			/>

			<Route exact path="/admin/all-employee" component={PageAllEmployee} />
			<Route exact path="/admin/add-employee" component={PageAddEmployee} />
			<Route exact path="/admin/edit-employee" component={PageEditEmployee} />

			<Route exact path="/admin/chat" component={Chat} />
			<Route exact path="/admin/chat/:id" component={Chat} />

			<Route exact path="/" component={HomePage} />

		</div>
	);
}

export default PrivateRoute
