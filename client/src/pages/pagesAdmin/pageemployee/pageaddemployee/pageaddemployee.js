import React, { Component } from "react";
import { Container, Form , Button } from "react-bootstrap";
import { connect } from "react-redux";
import { actAddEmployeeReq } from "../../../../actions/actEmployees";
import "./pageaddemployee.scss";
class PageAddEmployee extends Component {
    constructor (props){
        super(props);
        this.state = {
            txt_employeeID : "",
            txt_nameEmployee : "",
            avatarEmployee : "",
            txt_dateOfBirthEmployee : "",
            txt_genderEmployee : "",
            txt_addressEmployee : "",
            txt_emailEmployee :  "",
            numberPhoneEmployee : "",
        }
        this.fileInput = React.createRef();
    }


    handleInputChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    handleOnclickButtonChooseFile = async (e) => { //convert img to base 64 string
        var input = e.currentTarget;
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = () => {
                var imgTour = document.getElementById("imgTour");
                imgTour.src = reader.result;
                this.setState({
                    frmTour : {
                        ...this.state.frmTour, 
                        imgBase : reader.result
                    }
                })
            }
            await reader.readAsDataURL(input.files[0]); // convert to base64 string
        }else {
            return null;
        }
        console.log(this.state, '[this.state]');
    }
    onSaveEmployee = (e) => {
        var {history} = this.props; 
        e.preventDefault();
        var {
            txt_employeeID ,
            txt_nameEmployee ,
            avatarEmployee,
            txt_dateOfBirthEmployee ,
            txt_genderEmployee ,
            txt_addressEmployee ,
            txt_emailEmployee ,
            numberPhoneEmployee ,
        } = this.state;
        var employee = {
            employeeID : txt_employeeID,
            nameEmployee : txt_nameEmployee,
            emailEmployee : txt_emailEmployee,
            avatarEmployee : `${this.fileInput.current.files[0].name}`,
            dayOfBirthEmployee : txt_dateOfBirthEmployee,
            genderEmployee : txt_genderEmployee,
            addressEmployee : txt_addressEmployee,
            numberPhoneEmployee : numberPhoneEmployee
        }
        this.props.onAddEmployee(employee);
        history.push("/admint/all-employee");
    }
    render () {
        var {
            txt_employeeID ,
            txt_nameEmployee ,
            txt_dateOfBirthEmployee ,
            avatarEmployee,
            txt_genderEmployee ,
            txt_addressEmployee ,
            txt_emailEmployee ,
            numberPhoneEmployee ,
        } = this.state;
        return (
            <div className="pageaddemployee">
                <div className="form">
                    <Container>
                        <legend>Add Employee</legend>
                        <Form className="form_" onSubmit={this.onSaveEmployee}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Employee ID" 
                                    name="txt_employeeID"
                                    value = { txt_employeeID } 
                                    onChange = { this.handleInputChange}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Name Employee" 
                                    name="txt_nameEmployee" 
                                    value = { txt_nameEmployee }
                                    onChange = { this.handleInputChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Date Of Birth" 
                                    name="txt_dateOfBirthEmployee" 
                                    value = { txt_dateOfBirthEmployee }
                                    onChange = { this.handleInputChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Gender" 
                                    name="txt_genderEmployee" 
                                    value = { txt_genderEmployee } 
                                    onChange = { this.handleInputChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Address" 
                                    name ="txt_addressEmployee"
                                    value = { txt_addressEmployee }
                                    onChange = { this.handleInputChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Email" 
                                    name="txt_emailEmployee"
                                    value = { txt_emailEmployee }
                                    onChange = { this.handleInputChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Number Phone" 
                                    name="numberPhoneEmployee"
                                    value = { numberPhoneEmployee }
                                    onChange = { this.handleInputChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input 
                                    type="file" 
                                    name="avatarTour"
                                    // value = { avatarEmployee }
                                    onChange = { this.handleOnclickButtonChooseFile }
                                    ref={this.fileInput} 
                                /><br/>
                                <div className = "img_tour">
                                    <img id="imgTour" src=""/>
                                </div>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Create Employee
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onAddEmployee : (employee) => {
            dispatch(actAddEmployeeReq(employee))
        }
    }
}

export default connect(null, mapDisPatchToProps) (PageAddEmployee);