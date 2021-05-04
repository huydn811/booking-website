import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { routesAuth } from '../../routes';

class rootAuth extends Component {
  constructor(props) {
    super(props);
  }

    showContentMenu = (routesAuth) => {
      let result = null;
      if (routesAuth.length > 0) {
        result = routesAuth.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ));
      }
      return result;
    }

    render() {
      return (
        <div>
          {/* <Header></Header> */}
          <Switch>
            { this.showContentMenu(routesAuth) }
          </Switch>
          {/* <Footer></Footer> */}
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  login: state.login,
});
export default connect(mapStateToProps, null)(rootAuth);
