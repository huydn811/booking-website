import React, { useEffect, useRef, useState } from 'react';
import { Form, Container, Table, Spinner, Modal, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { AdminLayout } from '../../AdminLayout/AdminLayout';
import './AllUser.scss';
import { getAllUserType, delUserType, getUserByIdType, updateUserType } from '../../../redux/actionTypes'
import { Spin } from 'antd';

const PageAllUser = () => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const [file, setFile] = useState(null)
  const fileInput = useRef();

  const { userState: { listUsers = [], isRefresh, singleUsers },
    loadingState: { loadingGetAllUser, loadingGetUserById } }
    = useSelector(currentState => currentState)


  useEffect(() => {
    dispatch({ type: getAllUserType.request });
  }, [dispatch, isRefresh])


  const handleClose = () => {
    setIsToggle(() => false)
  }

  useEffect(() => {
    if (isRefresh) {
      handleClose();
    }
  }, [isRefresh])


  const handleDelete = (id) => {
    dispatch({ type: delUserType.request, payload: id });
  }

  const handleShow = (_id) => {
    if (!_id) return;
    setIsToggle((cS) => !cS)
    dispatch({ type: getUserByIdType.request, payload: _id });
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

    dispatch({ type: updateUserType.request, payload: { id: singleUsers._id, data: newData } });
    setIsToggle((cS) => !cS)

  };


  return (
    <AdminLayout>
      <div className="pagealluser">
        <Container>
          <div className="table-all-user">
            <legend>All User</legend>

            <Modal show={isToggle} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update User</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                {
                  loadingGetUserById ? (
                    <Spinner animation="border" variant="primary" />
                  ) : (
                    <Container>
                      <Formik
                        initialValues={singleUsers}
                        validationSchema={
                          Yup.object().shape({
                            userName: Yup.string('Please enter your filed').required(),
                            numberPhoneUser: Yup.string('Please enter your filed').required(),
                            email: Yup.string('Please enter your filed').required(),
                          })
                        }
                        onSubmit={(values) => onSubmit(values)}
                      >
                        {({
                          errors, values, handleChange, handleSubmit,
                        }) => (
                          <Form className="form_" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                  type="text"
                                  name="userName"
                                  placeholder="user name"
                                  defaultValue={values.userName}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                  {errors.userName}
                                </Form.Text>
                              </Form.Group>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                  type="text"
                                  name="numberPhoneUser"
                                  placeholder="Phone number"
                                  defaultValue={values.numberPhoneUser}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                  {errors.numberPhoneUser}
                                </Form.Text>
                              </Form.Group>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                  type="text"
                                  placeholder="email"
                                  name="email"
                                  defaultValue={values.email}
                                  onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                  {errors.email}
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
                              <Button variant="primary" type="submit">
                                Update User
                              </Button>
                            </Form.Group>
                          </Form>
                        )}
                      </Formik>
                    </Container>
                  )
                }

              </Modal.Body>
            </Modal >


            <Table striped bordered hover>
              {
                loadingGetAllUser ? (
                  <Spin />
                ) : (

                  <>
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
                      {
                        listUsers.map(item => (


                          <tr>
                            <td>{item.userName}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            <td>{item.numberPhoneUser}</td>
                            <td>
                              <div className="btnAction d-flex justify-content-center">
                                <button type="button" class="btn btn-primary mr-3"
                                  onClick={() => handleShow(item._id)}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </button>
                                <button type="button" class="btn btn-danger"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <i className="far fa-trash-alt"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>

                  </>
                )
              }
            </Table>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
}


export default PageAllUser
