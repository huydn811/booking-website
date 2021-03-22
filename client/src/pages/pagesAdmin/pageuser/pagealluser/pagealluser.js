import React, { Component } from "react";
import {Container, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actDeleteUserReq, actFetchAllTUserReq, } from "../../../../actions/actUser";
import "./pagealluser.scss";
class PageAllUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllUser();
    }

    handleOnClickDeleteUser = (userID) =>{
        this.props.onDeleteUser(userID);
    }

    showListUser = (users) => {
        var result = null;
        if(users.length > 0) {
            result = users.map((user, index) => {
                if(user !== undefined){
                    return (
                        <tr key = { index }>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>{user.numberPhoneUser}</td>
                            <td className="td-action">
                                <Button 
                                    variant="danger"
                                    onClick = { ()=> { this.handleOnClickDeleteUser(user._id)}}
                                >Del</Button>
                                <Link to={`/admint/edit-user/${user._id}`}>
                                    <Button>
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    )
                }
            })
        }
        return result;
    }
    render() {
        var { users } = this.props;
        return(
            <div className="pagealluser">
                <Container>
                    <div className="table-all-user">
                        <legend>All User</legend>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>User Name</th>
                                <th>Pass word</th>
                                <th>Email</th>
                                <th>Number Phone</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.showListUser(users) }
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users : state.user
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        fetchAllUser : () => {
            dispatch(actFetchAllTUserReq());
        },
        onDeleteUser : (userID) => {
            dispatch(actDeleteUserReq(userID))
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps) (PageAllUser);