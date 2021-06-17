import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { actAddUserReq } from '../../../../actions/actUser';
import './AddUser.scss';
import { AdminLayout } from '../../AdminLayout/AdminLayout';

class PageEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmUser: {
        userName: '',
        password: '',
        email: '',
        numberPhoneUser: '',
        avatarUser: '',
        imgBase: '',
      },
    };
    this.fileInput = React.createRef();
  }

    handleInputOnChange = (e) => {
      this.setState({
        frmUser: {
          ...this.state.frmUser,
          [e.target.name]: e.target.value,
        },
      });
    }

    handleOnclickButtonChooseFile = async (e) => { // convert img to base 64 string
      const input = e.currentTarget;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          const img_avatar = document.getElementById('img_avatar');
          img_avatar.src = reader.result;
          this.setState({
            frmEmployee: {
              ...this.state.frmUser,
              imgBase: reader.result,
            },
          });
        };
        await reader.readAsDataURL(input.files[0]); // convert to base64 string
      } else {
        return null;
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const user = this.state.frmUser;
      const { history } = this.props;
      const thisProps = this.props;
      const myPromisUser = new Promise((myResolve, myReject) => {
        thisProps.onAddUser(user);
        myResolve(
          'aaaaaaaaaa',
        );
        myReject(
          'bbbbbbbb',
        );
      });
      myPromisUser.then(() => {
        history.push('/admin/all-user');
      });
    }

    render() {
      return (
          <AdminLayout>
        <div className="pageadduser">
          <div className="form">
            <Container>
              <legend>Edit User</legend>
              <Formik
                initialValues={{
                  userName: '',
                  password: '',
                  email: '',
                  numberPhoneUser: '',
                }}
                validationSchema={
                                Yup.object().shape({
                                  userName: Yup.string().required(),
                                  password: Yup.string().required(),
                                  email: Yup.string().email().required(),
                                  numberPhoneUser: Yup.number().required(),
                                })
}
                onSubmit={
                                (values) => {
                                  console.log(values);
                                }
                            }
              >
                {({
                  errors, handleChange, values, handleSubmit,
                }) => (
                  <Form className="form_" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        {errors.userName}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        {errors.password}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control

                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        {errors.email}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="number"
                        placeholder="Number Phone"
                        name="numberPhoneUser"
                        value={values.numberPhoneUser}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        {errors.numberPhoneUser}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Role"
                        name="roleUser"
                        // value={values.numberPhoneUser}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        {/* {errors.numberPhoneUser} */}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <input
                        type="file"
                        name="avatarUser"
                                        // value = { this.state.frmUser.avatarUser }
                        onChange={this.handleOnclickButtonChooseFile}
                        ref={this.fileInput}
                      />
                      <br />
                      <div className="img_">
                        <img id="img_avatar" src="" />
                      </div>
                      <Form.Text className="text-muted" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                    >
                      Edit User
                    </Button>
                  </Form>
                )}
              </Formik>
            </Container>
          </div>
        </div>
        </AdminLayout>
      );
    }
}

const mapDisPatchToProps = (dispatch, props) => ({
  onAddUser: (user) => {
    // dispatch(actAddUserReq(user));
  },
});

export default connect(null, mapDisPatchToProps)(PageEditUser);
