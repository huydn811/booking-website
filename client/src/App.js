import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import RootAdmin from "./pages/pagesAdmin/rootAdmin";
import RootFE from "./pages/pagesFE/rootFE";
import RootAuth from './pages/pagesAuth/rootAuth';
import NotFoundPage from "./pages/pagesFE/notfoundpage/notfoundpage";
class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
            <Switch>
              <Route path="/admint" component={RootAdmin} />
              <Route path="/login" component={RootAuth}/>
              <Route path="/Register" component={RootAuth}/>
              <Route path="/:slug" component={RootFE} />
              <Route exact path="/" component={RootFE} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    console.log(routes, '[routes]');
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        console.log(route, '[route]');
        return (
          <Route
            key = {index}
            path = { route.path }
            exact = { route.exact }
            component = {route.main} 
          />
        );
        // return null
      });
    }
    return result;
  }
}
export default App;
