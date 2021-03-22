import React, { Component } from "react";
import {Container, Form, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { actGetTourByIDReq, actUpdateUserReq } from "../../../../actions/actUser";
import "./pageedituser.scss";

class PageEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            password : "",
            email : "",
            numberPhoneUser : "",
            // avatarUser : "",
            imgBase : ""
        }
        this.fileInput = React.createRef();
    }
    componentDidMount () {
        let { match } = this.props;
        if(match){
            let userID = match.params.userID;
            this.props.onEditingUser(userID);
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            let { itemEditing } = nextProps;
            this.setState({
                userName : itemEditing.userName,
                password : itemEditing.password,
                email : itemEditing.email,
                numberPhoneUser : itemEditing.numberPhoneUser,
                avatarUser : itemEditing.avatarUser
            })
        }
    }
    handleInputOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleOnclickButtonChooseFile = async (e) => { //convert img to base 64 string
        var input = e.currentTarget;
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = () => {
                var img_avatar = document.getElementById("img_avatar");
                img_avatar.src = reader.result;
                this.setState({
                    ...this.state, 
                    imgBase : reader.result
                })
            }
            await reader.readAsDataURL(input.files[0]); // convert to base64 string
        }else {
            return null;
        }
    }
    onSubmitFormUpdateUser = (e) => {
        e.preventDefault();
        var { match } = this.props;
        var userID = match.params.userID;
        var user = {
            _id : userID,
            ...this.state,
        };
        console.log(user, '[user]');
        var { history } = this.props;
        var thisPropsUser =  this.props;
        var myPromisUser = new Promise((myResolve, myReject) => {
            thisPropsUser.onUpdateUser(user);
            myResolve(
                "aaaaaaaaaaa"
            )
            myReject (
                "bbbbbbbbb"
            )
        });
        myPromisUser.then(()=> {
            history.push("/admint/all-user");
        })
    }
    render(){
        return(
            <div className="pageedituser">
                 <div className="form">
                    <Container>
                        <legend>Edit User</legend>
                        <Form className="form_" onSubmit = {this.onSubmitFormUpdateUser}>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="User Name" 
                                    name = "userName"
                                    value = {this.state.userName}
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    name = "password"
                                    value = { this.state.password }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Email" 
                                    name = "email"
                                    value = { this.state.email }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Number Phone</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Number Phone" 
                                    name = "numberPhoneUser"
                                    value = { this.state.numberPhoneUser }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input 
                                    type="file" 
                                    name="avatarTour"
                                    onChange = { this.handleOnclickButtonChooseFile }
                                    ref={this.fileInput} 
                                /><br/>
                                <div className = "img_">
                                    <img id="img_avatar" src=""/>
                                </div>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Edit User
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
        onEditingUser : (userID) => {
            dispatch(actGetTourByIDReq(userID));
        },
        onUpdateUser : (user) => {
            dispatch(actUpdateUserReq(user))
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps) (PageEditUser);