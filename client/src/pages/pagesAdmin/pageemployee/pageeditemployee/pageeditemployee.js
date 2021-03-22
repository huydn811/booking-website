import React, { Component } from "react";
import { Container, Form , Button } from "react-bootstrap";
import { connect } from "react-redux";
import { actFectchEmployeeIDReq, actUpdateEmployeeReq } from "../../../../actions/actEmployees";
import employees from "../../../../reducers/employee";
import "./pageeditemployee.scss";
class PageEditEmployee extends Component {
    constructor (props) {
        super(props)
        this.state = {
            txt_employeeID : "",
            txt_nameEmployee : "",
            avatarEmployee : "",
            txt_dayOfBirthEmployee : "",
            txt_genderEmployee : "",
            txt_addressEmployee : "",
            txt_emailEmployee :  "",
            numberPhoneEmployee : "",
        }
        this.fileInput = React.createRef();
    }

    componentDidMount() {
        let {match} = this.props;
        if(match){
            let employeeID = match.params.employeeID;
            this.props.onEditEmployee(employeeID)
        } 
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            let { itemEditing } = nextProps;
            this.setState({
                txt_employeeID : itemEditing.employeeID,
                txt_nameEmployee : itemEditing.nameEmployee,
                avatarEmployee : itemEditing.avatarEmployee,
                txt_dayOfBirthEmployee : itemEditing.dayOfBirthEmployee,
                txt_genderEmployee : itemEditing.genderEmployee,
                txt_addressEmployee :itemEditing.addressEmployee,
                txt_emailEmployee :  itemEditing.emailEmployee,
                numberPhoneEmployee : itemEditing.numberPhoneEmployee,
            })
        }
    }
    
    handleInputOnChange = (e) => {
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

    onSubmitFormEditEmployee = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var {match} = this.props;
        var employeeID = match.params.employeeID;
        var {
            txt_employeeID ,
            txt_nameEmployee ,
            txt_dayOfBirthEmployee ,
            avatarEmployee,
            txt_genderEmployee ,
            txt_addressEmployee ,
            txt_emailEmployee ,
            numberPhoneEmployee ,
        } = this.state;
        var employee = {
            _id : employeeID,
            employeeID : txt_employeeID,
            nameEmployee : txt_nameEmployee,
            emailEmployee : txt_emailEmployee,
            roleEmployee : "",
            avatarEmployee : `${this.fileInput.current.files[0].name}`,
            dayOfBirthEmployee : txt_dayOfBirthEmployee,
            genderEmployee : txt_genderEmployee,
            addressEmployee : txt_addressEmployee,
            numberPhoneEmployee : numberPhoneEmployee
        }
        var thisPropsEditEmployee = this.props;
        let myPromisEditEmployee = new Promise((myResolve, myReject)=>{
            thisPropsEditEmployee.onUpdateEmployee(employee);
            myResolve(
                "aaaaaaa"
            );
            myReject(
                "bbbbbbbbbb"
            )
        }) 
        myPromisEditEmployee.then(()=> {
            history.push("/admint/all-employee");
        })
    }

    render () {
        var {
            txt_employeeID ,
            txt_nameEmployee ,
            txt_dayOfBirthEmployee ,
            avatarEmployee,
            txt_genderEmployee ,
            txt_addressEmployee ,
            txt_emailEmployee ,
            numberPhoneEmployee ,
        } = this.state;
        return (
            <div className="pageEditemployee">
                <div className="form">
                    <Container>
                        <legend>Edit Employee</legend>
                        <Form className="form_" onSubmit = {this.onSubmitFormEditEmployee}>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Employee ID</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Employee ID"
                                    name = "txt_employeeID"
                                    value = { txt_employeeID }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name Employee</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Name Employee"
                                    name = "txt_nameEmployee"
                                    value = { txt_nameEmployee }
                                    onChange = { this.handleInputOnChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Date Of Birth"
                                    name = "txt_dayOfBirthEmployee"
                                    value = { txt_dayOfBirthEmployee }
                                    onChange = { this.handleInputOnChange } />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Gender" 
                                    name = "txt_genderEmployee"
                                    value = { txt_genderEmployee }
                                    onChange = { this.handleInputOnChange }/>                         
                                    <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Address Employee</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Address"
                                    name = "txt_addressEmployee"
                                    value = { txt_addressEmployee }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Employee</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Email"
                                    name = "txt_emailEmployee"
                                    value = { txt_emailEmployee } 
                                    onChange = { this.handleInputOnChange }/>                             
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Number Phone</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Number Phone"
                                    name = "numberPhoneEmployee"
                                    value = { numberPhoneEmployee }
                                    onChange = { this.handleInputOnChange } />
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
                                Edit Employee
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onEditEmployee : (id) => {
            dispatch(actFectchEmployeeIDReq(id));
        },
        onUpdateEmployee : (employee) => {
            dispatch(actUpdateEmployeeReq(employee))
        }
    }
}
export default connect(mapStateToProps, mapDisPatchToProps) (PageEditEmployee);