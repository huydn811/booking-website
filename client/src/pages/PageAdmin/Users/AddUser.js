import React, { Component, useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { actAddUserReq } from '../../../../actions/actUser';
import './AddUser.scss';
import { AdminLayout } from '../../AdminLayout/AdminLayout';
import { addUserType } from '../../../redux/actionTypes';
import { useHistory } from 'react-router-dom';

const PageAddUser = () => {
  const dispatch = useDispatch()

  const history = useHistory();
  const [state, setState] = useState()
  const [file, setFile] = useState(null)
  const fileInput = useRef();

  const initialValue = {
    userName: '1',
    password: 'truong add',
    role: 'viet nam',
    email: '10/10/2020',
    numberPhoneUser: '10/10/2021',
  }

  const handleChangeText = (value) => {
    setState((currentState) => ({ ...currentState, [value.name]: value.data }))
  }

  const onChangeFile = () => {
    let fileZero = fileInput.current.files[0];
    setFile(() => (fileZero))
  }


  const onSubmit = (values) => {

    const newData = new FormData();
    newData.append('avatar', file);
    newData.append('userName', values.userName);
    newData.append('password', values.password);
    newData.append('role', values.role);
    newData.append('email', values.email);
    newData.append('numberPhoneUser', values.numberPhoneUser);

    dispatch({ type: addUserType.request, payload: newData, history })
  }

  return (
    <AdminLayout>
      <div className="pageaddtour">
        <div className="form">
          <Container>
            <legend>Add User</legend>

            <Formik
              initialValues={initialValue}
              validationSchema={
                Yup.object().shape({
                  userName: Yup.string('Please enter your userName').required(),
                  password: Yup.string('Please enter your password').required(),
                  role: Yup.string('Please enter your role').required(),
                  email: Yup.string('Please enter your email').required(),
                  numberPhoneUser: Yup.string('Please enter your numberPhoneUser').required(),
                })
              }
              onSubmit={(values) => onSubmit(values)}
            >
              {({
                errors, values, handleChange, handleSubmit,
              }) => (
                <Form className="form_" encType="multipart/form-data" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="userName"
                      placeholder="user Name"
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
                      type="text"
                      name="role"
                      placeholder="role"
                      value={values.role}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.role}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="email"
                      name="email"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.email}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Phone"
                      name="numberPhoneUser"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.numberPhoneUser}
                    </Form.Text>
                  </Form.Group>
                 
                  <Form.Group className="form-group-input-file" controlId="formBasicEmail">
                    <input
                      type="file"
                      name="avatarTour"
                      ref={fileInput}
                      onChange={onChangeFile}
                    />
                    <br />
                    <div className="img_tour">
                      <img id="imgTour" src="" alt="" />
                    </div>
                    <Form.Text className="text-muted" />
                  </Form.Group>
                  <Button className="btn_submitForm" variant="primary" type="submit">
                    Create User
                </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </AdminLayout>

  )
}

export default PageAddUser
