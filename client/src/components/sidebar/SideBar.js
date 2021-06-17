import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import MenuSideBar from './MenuSideBar';
class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="main-sidebar">
          <aside className="sidebar-wrapper" id="sidebar-wrapper">
            <div className="sidebar-brand">
              <NavLink to="/admin/dashboard">DTU TOUR</NavLink>
            </div>
            <ul className="sidebar-menu">
              <li className="menu-header">Dash Board</li>
              <MenuSideBar/>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}
export default SideBar;