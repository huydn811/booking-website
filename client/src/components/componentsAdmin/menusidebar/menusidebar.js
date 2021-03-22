import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DropDown from '../sidebar/DropDown';
import "./menusidebar.scss";

const menusidebar = 
    {
        admins : [
        { 
            group : {
                    title : "Tour",
                    exact : "",
                    to : "",
                    list :[{
                        title : "All Tour",
                        exact : false,
                        to : "/admint/all-tour",
                    },
                    {
                        title : "Add Tour",
                        exact : false,
                        to : "/admint/add-tour",
                    }],
                },
            },
        { 
            group : 
                {
                    title : "User",
                    exact : "",
                    to : "",
                    list :[{
                        title : "All User",
                        exact : false,
                        to : "/admint/all-user",
                    },
                    {
                        title : "Add User",
                        exact : false,
                        to : "/admint/add-user",
                    }],
                },
        },
        { 
            group : 
                {
                    title : "Employee",
                    exact : "",
                    to : "",
                    list :[{
                        title : "All Employee",
                        exact : false,
                        to : "/admint/all-employee",
                    },
                    {
                        title : "Add Employee",
                        exact : false,
                        to : "/admint/add-employee",
                    }],
                },
        },
        { 
            group : 
                {
                    title : "Chat",
                    exact : "",
                    to : "",
                    list :[{
                        title : "Chats",
                        exact : false,
                        to : "/admint/chat",
                    }],
                },
        },
    ]}

class MenuSideBar extends Component {
    
    state = {
        isShow: false,
    }
    showMenus = (menus) => {
        return (
            <div>
                {menus.admins.map((val,i) => {
                    return (
                        <DropDown MenuItem={val} key = {i}/>
                    )
                })}
            </div>
        );
    }

    render () {
        return(
            <div className="menu-sidebar">
                { this.showMenus(menusidebar) }
            </div>
        )
    }
}



export default MenuSideBar;