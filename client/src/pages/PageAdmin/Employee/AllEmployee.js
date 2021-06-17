import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Table, Spinner, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import {
  getAllEmployeeType,
  addEmployeeType,
  updateEmployeeType,
  delEmployeeType,
  getEmployeeByIdType

} from '../../../redux/actionTypes'

import './AllEmployee.scss';
import { AdminLayout } from '../../AdminLayout/AdminLayout';
import { Spin } from 'antd';


const PageAllEmployee = () => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);


  const { employeeState: { listEmployee = [],
    isRefresh, singleEmployee },
    loadingState: { loadingGetAllEmployee, loadingGetEmployeeById } }
    = useSelector(currentState => currentState)

  useEffect(() => {
    dispatch({ type: getAllEmployeeType.request });
  }, [dispatch, isRefresh])

  const handleShow = (_id) => {
    if (!_id) return;
    setIsToggle((cS) => !cS)
    dispatch({ type: getEmployeeByIdType.request, payload: _id });
  }

  const handleDelete = (_id) => {
    dispatch({ type: delEmployeeType.request, payload: _id });
  }
  const handleClose = () => {
    setIsToggle(() => false)
  }

  const onSubmit = (values) => {
    dispatch({ type: updateEmployeeType.request, payload: { id: singleEmployee._id, data: values } });
  };


  return (
    <AdminLayout>
      <div className="pageallemployee">

        <Modal show={isToggle} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Tour</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {
              loadingGetEmployeeById ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <Container>
                  <Formik
                    initialValues={singleEmployee}
                    validationSchema={
                      Yup.object().shape({
                        nameEmployee: Yup.string('Please enter your filed').required(),
                        roleEmployee: Yup.string('Please enter your filed').required(),
                        addressEmployee: Yup.string('Please enter your filed').required(),
                        numberPhoneEmployee: Yup.string('Please enter your filed').required(),
                        emailEmployee: Yup.string('Please enter your filed').required(),
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
                            name="nameEmployee"
                            placeholder="name Employee"
                            defaultValue={values.nameEmployee}
                            onChange={handleChange}
                          />
                          <Form.Text className="text-muted">
                            {errors.nameEmployee}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="roleEmployee"
                            placeholder="Role Employee"
                            defaultValue={values.roleEmployee}
                            onChange={handleChange}
                          />
                          <Form.Text className="text-muted">
                            {errors.roleEmployee}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            name="addressEmployee"
                            placeholder=" Address"
                            defaultValue={values.addressEmployee}
                            onChange={handleChange}
                          />
                          <Form.Text className="text-muted">
                            {errors.addressEmployee}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="number Phone Employee "
                            name="numberPhoneEmployee"
                            defaultValue={values.numberPhoneEmployee}
                            onChange={handleChange}
                          />
                          <Form.Text className="text-muted">
                            {errors.numberPhoneEmployee}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="email Employee"
                            name="emailEmployee"
                            defaultValue={values.emailEmployee}
                            onChange={handleChange}
                          />
                          <Form.Text className="text-muted">
                            {errors.emailEmployee}
                          </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Update Employee
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Container>
              )
            }

          </Modal.Body>
        </Modal >


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
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  loadingGetAllEmployee && <Spin />
                }
                {
                  listEmployee.map((item) => (
                    <tr>
                      <td>{item.nameEmployee}</td>
                      <td>{item.emailEmployee}</td>
                      <td>{item.numberPhoneEmployee}</td>
                      <td>{item.addressEmployee}</td>
                      <td>{item.roleEmployee}</td>
                      <td>
                        <div className="btnAction">
                          <button type="button" class="btn btn-primary"
                            onClick={() => handleShow(item._id)}
                          >
                            <i class="fas fa-pencil-alt"></i>
                          </button>

                          <button type="button" class="btn btn-danger" onClick={() => handleDelete(item._id)}>
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
              {/* <tbody>
            {this.showAllEmployee(employees)}
          </tbody> */}
            </Table>
          </div>
        </Container>
      </div>
    </AdminLayout>
  );
}

export default PageAllEmployee
