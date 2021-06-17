import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router, Route,
    Switch
} from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import LoginPage from './pages/Login';
import PrivateRoute from './route/private';
import PageRegister from './pages/Register';
import { history } from './redux/store';


import AllTourPage from './pages/AllTourPage';
import PageDashBoard from './pages/dashboard';
import DetailPage from './pages/DetailPage';
import Chat from './pages/PageAdmin/Chat/Chat';
import PageAddEmployee from './pages/PageAdmin/Employee/AddEmployee';
import PageAllEmployee from './pages/PageAdmin/Employee/AllEmployee';
import PageEditEmployee from './pages/PageAdmin/Employee/EditEmployee';
import PageAddTour from './pages/PageAdmin/Tours/AddTour';
import PageAllTour from './pages/PageAdmin/Tours/AllTour';
import PageEditTour from './pages/PageAdmin/Tours/EditTour';
import PageAddUser from './pages/PageAdmin/Users/AddUser';
import PageAllUser from './pages/PageAdmin/Users/AllUser';
import PageEditUser from './pages/PageAdmin/Users/EditUser';
import HomePage from './pages/Home/homepage';

function App() {
    const {
        authState: { token },
    } = useSelector((currentState) => currentState);

    if (!token) {
        history.push('/login')
    }
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route path="/register" exact component={PageRegister} />
                    <Route path="/login" exact component={LoginPage} />

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


                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
