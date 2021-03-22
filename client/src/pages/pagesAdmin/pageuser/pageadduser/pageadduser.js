import React, { Component } from "react";
import {Container, Form, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { actAddUserReq } from "../../../../actions/actUser";
import "./pageadduser.scss";

class PageAddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            frmUser : {
                userName : "",
                password : "",
                email : "",
                numberPhoneUser : "",
                avatarUser : "",
                imgBase : "" 
            }
        }
        this.fileInput = React.createRef();
    }
    handleInputOnChange = (e) => {
        this.setState({
            frmUser : {
                ...this.state.frmUser,
                [e.target.name] : e.target.value,
            }
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
                    frmUser : {
                        ...this.state.frmUser, 
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
    onSubmitFormAddUser = (e) => {
        e.preventDefault();
        var user = this.state.frmUser;
        var { history } = this.props;
        var thisProps = this.props;
        let myPromisUser = new Promise ((myResolve,myReject)=>{
            thisProps.onAddUser(user);
            myResolve(
                "aaaaaaaaaa"
            )
            myReject(
                "bbbbbbbb"
            );
        });
        myPromisUser.then(()=>{
            history.push("/admint/all-user");
        })
    }
    render(){
        return(
            <div className="pageadduser">
                 <div className="form">
                    <Container>
                        <legend>Add User</legend>
                        <Form className="form_" encType="multipart/form-data" onSubmit = {this.onSubmitFormAddUser}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="User Name" 
                                    name = "userName"
                                    value = {this.state.frmUser.userName}
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    name = "password"
                                    value = { this.state.frmUser.password }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Email" 
                                    name = "email"
                                    value = { this.state.frmUser.email }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Number Phone" 
                                    name = "numberPhoneUser"
                                    value = { this.state.frmUser.numberPhoneUser }
                                    onChange = { this.handleInputOnChange }/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input 
                                    type="file" 
                                    name="avatarUser"
                                    // value = { this.state.frmUser.avatarUser }
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
                                Create User
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return{
        onAddUser : (user) => {
            dispatch(actAddUserReq(user))
        }
    }
}

export default connect(null,mapDisPatchToProps) (PageAddUser);