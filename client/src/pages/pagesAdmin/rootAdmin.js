import React, { Component } from 'react';
import {connect} from "react-redux";
import { routesAdmin } from "../../routes";
import { Switch, Route } from "react-router-dom";
import SideBar from "../../components/componentsAdmin/sidebar/sidebar";
import NavBar from "../../components/componentsAdmin/navbar/navbar";
class rootAdmin extends Component {
    constructor(props){
        super(props)
    }
    showContentMenu = (routesAdmin) => {
        var result = null;
        if(routesAdmin.length > 0){
          result = routesAdmin.map((route, index) => {
            return (
              <Route
                key = {index}
                path = { route.path }
                exact = { route.exact }
                component = {route.main} 
              />
            );
          });
        }
        return result;
      }
    render() {
      if(this.props.login.isLogin == true){
        return (
            <div>
                <NavBar></NavBar>
                <SideBar></SideBar>
                    <Switch>
                      { this.showContentMenu(routesAdmin) }
                    </Switch>
            </div>
        );
      }else{
        this.props.history.push("/login");
        return null;
      }
    }
}

const mapStateToProps = (state) => {
    return {
        login : state.login
    }
}

export default connect(mapStateToProps,null) (rootAdmin);