import React, { Component } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actDeleteEmployeeReq, actFetchEmployeeReq } from "../../../../actions/actEmployees";

import "./pageallemployee.scss";
class PageAllEmployee extends Component {
    constructor (props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAllEmployee();
    }

    handleDeleteEmployee = (id) => {
        this.props.onDeleteEmployee(id);
    }

    showAllEmployee = (employees) => {
        var result = null;
        if(employees.length > 0){
            result = employees.map((employee, index) => {
                if(employee !== undefined){
                    return (
                        <tr key = {index}>
                            <td>{employee.nameEmployee}</td>
                            <td>{employee.emailEmployee}</td>
                            <td>{employee.numberPhoneEmployee}</td>
                            <td>{employee.addressEmployee}</td>
                            <td>{employee.dayOfBirthEmployee} </td>
                            <td className="td-action">
                                <Button 
                                    variant="danger" 
                                    onClick={ () => this.handleDeleteEmployee(employee._id) }>
                                    Del
                                </Button>
                                <Link to={`/admint/edit-employee/${employee._id}`}>
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
    render (){
        var {employees} = this.props;
        return (
            <div className="pageallemployee">
                <Container>
                    <div className="table-all-employee">
                        <legend>All Employee</legend>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name Employee</th>
                                <th>Email Employee</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Birth Day</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllEmployee(employees)}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees : state.employee
    }
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        fetchAllEmployee : () => {
            dispatch(actFetchEmployeeReq())
        },
        onDeleteEmployee : (id) => {
            dispatch(actDeleteEmployeeReq(id))
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps) (PageAllEmployee);