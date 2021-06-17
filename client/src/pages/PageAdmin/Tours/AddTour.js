import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik } from 'formik';
import React, { useState, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';

// import Toastify from '../../../../utils/toastify'


import './AddTour.scss';
import { AdminLayout } from '../../AdminLayout/AdminLayout';

import { addTourType } from '../../../redux/actionTypes'
import { useHistory } from 'react-router';

const PageAddTour = () => {
  const dispatch = useDispatch()

  const history = useHistory();
  const [state, setState] = useState()
  const [file, setFile] = useState(null)
  const fileInput = useRef();

  const initialValue = {
    tourID: '1',
    tourName: 'truong add',
    startAddress: 'viet nam',
    startDate: '10/10/2020',
    endDate: '10/10/2021',
    priceTour: 20000,
    qtyPeople: 20000,
    descriptionTour: 'lorem ipsum ipsum ipsum',
    detailTour: 'lorem ipsum ipsum ipsum',
  }

  const handleChangeText = (value) => {
    setState((currentState) => ({ ...currentState, [value.name]: value.data }))
  }

  const onChangeFile = () => {
    let fileZero = fileInput.current.files[0];
    setFile(() => (fileZero))
  }


  const onSubmit = (values) => {
    const refactorData = {
      descriptionTour: state.descriptionTour.replace(/<\/?[^>]+(>|$)/g, ""),
      detailTour: state.detailTour.replace(/<\/?[^>]+(>|$)/g, ""),
    };

    const newData = new FormData();
    newData.append('avatar', file);
    newData.append('tourID', values.tourID);
    newData.append('tourName', values.tourName);
    newData.append('startAddress', values.startAddress);
    newData.append('endAddress', values.endAddress);
    newData.append('startDate', values.startDate);
    newData.append('endDate', values.endDate);
    newData.append('priceTour', values.priceTour);
    newData.append('qtyPeople', values.qtyPeople);
    newData.append('descriptionTour', refactorData.descriptionTour);
    newData.append('detailTour', refactorData.detailTour);

    dispatch({ type: addTourType.request, payload: newData })
  }

  return (
    <AdminLayout>
      <div className="pageaddtour">
        <div className="form">
          <Container>
            <legend>Add Tour</legend>

            <Formik
              initialValues={initialValue}
              validationSchema={
                Yup.object().shape({
                  tourID: Yup.string('Please enter your filed').required(),
                  tourName: Yup.string('Please enter your filed').required(),
                  startAddress: Yup.string('Please enter your filed').required(),
                  startDate: Yup.date('Please enter your filed').required(),
                  endDate: Yup.date('Please enter your filed').required(),
                  priceTour: Yup.number('Please enter your filed').required(),
                  qtyPeople: Yup.number('Please enter your filed').required(),
                  descriptionTour: Yup.string('Please enter your filed').required(),
                  detailTour: Yup.string('Please enter your filed').required(),
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
                      name="tourID"
                      placeholder="Tour ID"
                      value={values.tourID}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.tourID}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="tourName"
                      placeholder="Name Tour"
                      value={values.tourName}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.tourName}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="startAddress"
                      placeholder="Start Address"
                      value={values.startAddress}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.startAddress}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="date"
                      placeholder="Start Date"
                      name="startDate"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.startDate}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="date"
                      placeholder="End Date"
                      name="endDate"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.endDate}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="number"
                      placeholder="Price Tour"
                      name="priceTour"
                      value={values.priceTour}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.priceTour}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="number"
                      placeholder="Quantity People"
                      name="qtyPeople"
                      value={values.qtyPeople}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      {errors.qtyPeople}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">

                    <CKEditor
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        handleChangeText({ name: 'descriptionTour', data })
                      }}
                    />
                    <Form.Text className="text-muted">
                      {errors.descriptionTour}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        handleChangeText({ name: 'detailTour', data })
                      }}
                    />
                    <Form.Text className="text-muted">
                      {errors.detailTour}
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
                    Create Tour
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

export default PageAddTour
