import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './DropDown.scss';

class DropDown extends Component {

  state = {
    isShow: false,
  }

  listMenuItem = (a) => (
    <div>
      {
        a.group.list.map((value, index) => (
          <li key={index}>
            <NavLink
              key={index}
              className="nav-link"
              to={value.to}
            >
              {value.title}
            </NavLink>
          </li>
        ))
      }
    </div>
  )

  render() {
    const { isShow } = this.state;
    return (
      <div className="menu-sidebar">
        <li className="nav-item dropdown" id="nav-item">
          <p
            className="nav-link has-dropdown"
            data-toggle="dropdown"
            onClick={() => this.setState({ isShow: !isShow })}
          >
            <i className="fas fa-columns" />
            <Link to="#">
              <span>{this.props.MenuItem.group.title}</span>
            </Link>
          </p>
          <ul className={`dropdown-menu ${isShow ? 'd-block active' : 'none'}`} id="dropdown-menu-sidebar">
            {this.listMenuItem(this.props.MenuItem)}
          </ul>
        </li>
      </div>
    );
  }
}

export default DropDown;
