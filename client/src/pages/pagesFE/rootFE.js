import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { routes } from "../../routes";
import Header from "../../components/componentsFE/header/header";
import Footer from "../../components/componentsFE/footer/footer";
import HomePage from "../../pages/pagesFE/homepage/homepage";
class rootFE extends Component {
    constructor(props){
        super(props);
    }
    showContentMenu = (routes) => {
        var result = null;
        if(routes.length > 0){
          result = routes.map((route, index) => {
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
        return (
            <div>
                <Header></Header>
                    <Switch>
                        { this.showContentMenu(routes) }
                        {/* <Route exact={true} path="/" component={HomePage} /> */}
                    </Switch>
                <Footer></Footer>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login : state.login
    }
}
export default connect(mapStateToProps,null) (rootFE);