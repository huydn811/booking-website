import React, { useEffect, useState, useCallback } from 'react';
import { Form, Button, Container, Table, Spinner, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { actFetchToursReq, actDeleteTourReq, getTourById, updateTour } from '../../../../actions/actTour';


import { Formik } from 'formik';
import * as Yup from 'yup';

import './pagealltour.scss';

const PageAllTour = props => {
  const dispatch = useDispatch();

  const { tour: { listTour = {}, isRefresh }, tourState } = useSelector(currentState => currentState)

  const [isToggle, setIsToggle] = useState(false);

  const { singleTour } = tourState

  useEffect(() => {
    dispatch(actFetchToursReq());
  }, [dispatch, isRefresh])

  useEffect(() => {
    if (isRefresh) {
      handleClose();
    }
  }, [isRefresh])


  const handleDeleteTour = (_id) => {
    dispatch(actDeleteTourReq(_id));
  }


  const handleShow = (_id) => {
    if (!_id) return;
    setIsToggle((cS) => !cS)
    dispatch(getTourById(_id));
  }

  const handleClose = () => {
    setIsToggle(() => false)
  }

  const onSubmit = useCallback((values) => {
    dispatch(updateTour(values))
  }, [dispatch])

  return (
    <div className="alltourpage">

      <Modal show={isToggle} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {
            !Object.keys(singleTour) ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <Container>
                <Formik
                  initialValues={singleTour}
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
                          defaultValue={values.tourID}
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
                          defaultValue={values.tourName}
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
                          defaultValue={values.startAddress}
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
                          defaultValue={values.priceTour}
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
                          defaultValue={values.qtyPeople}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          {errors.qtyPeople}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control name="descriptionTour" defaultValue={values.descriptionTour} as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                          {errors.descriptionTour}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control name="detailTour" defaultValue={values.detailTour} as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                          {errors.detailTour}
                        </Form.Text>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Update Tour
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
        <div className="table-all-tour">
          <legend>All Tour</legend>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name Tour</th>
                <th>Start Address</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price Tour (VND)</th>
                <th>QTY People</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                !listTour.length ? (
                  <Spinner animation="border" variant="primary" />
                ) : (

                  listTour?.map((tour, index) => {
                    return (
                      <tr key={index}>
                        <td>{tour.tourName}</td>
                        <td>{tour.startAddress}</td>
                        <td>{tour.startDate}</td>
                        <td>{tour.endDate}</td>
                        <td>{tour.priceTour}</td>
                        <td>{tour.qtyPeople}</td>
                        <td className="td-action">
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteTour(tour._id)}
                          >
                            Del
                          </Button>
                          <Button className="ml-2"
                            onClick={() => handleShow(tour._id)}
                          >
                            Edit
                            </Button>
                        </td>
                      </tr>
                    );
                  })

                )
              }
            </tbody>
          </Table>
        </div>
      </Container>
    </div >
  );
}

PageAllTour.propTypes = {

}

export default PageAllTour
