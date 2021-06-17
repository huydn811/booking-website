import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Form, Button, Container, Table, Spinner, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from "../../AdminLayout/AdminLayout"


import { getAllTourType, delTourType, getTourByIdType, updateTourType } from '../../../redux/actionTypes'

import { Formik } from 'formik';
import * as Yup from 'yup';

import './AllTour.scss';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';

const PageAllTour = props => {
    const dispatch = useDispatch();

    const [file, setFile] = useState(null)
    const fileInput = useRef();
    const [isToggle, setIsToggle] = useState(false);
    const { tourState: { tours = [], isRefresh, singleTours },
        loadingState: { loadingGetAllTour, loadingGetTourById } } = useSelector(currentState => currentState)

    useEffect(() => {
        dispatch({ type: getAllTourType.request });
    }, [dispatch, isRefresh])


    useEffect(() => {
        if (isRefresh) {
            handleClose();
        }
    }, [isRefresh])



    const onChangeFile = () => {
        let fileZero = fileInput.current.files[0];
        setFile(() => (fileZero))
    }


    const handleDeleteTour = (_id) => {
        dispatch({ type: delTourType.request, payload: _id });
    }


    const handleShow = (_id) => {
        if (!_id) return;
        setIsToggle((cS) => !cS)
        dispatch({ type: getTourByIdType.request, payload: _id });
    }

    const handleClose = () => {
        setIsToggle(() => false)
    }

    const onSubmit = (values) => {
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
        newData.append('descriptionTour', values.descriptionTour);
        newData.append('detailTour', values.detailTour);

        dispatch({ type: updateTourType.request, payload: { id: singleTours._id, data: newData } });
    };


    if (loadingGetAllTour) return <Spin />;

    return (
        <AdminLayout>
            <div className="alltourpage">
                <Modal show={isToggle} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Tour</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {
                            loadingGetTourById ? (
                                <Spinner animation="border" variant="primary" />
                            ) : (
                                <Container>
                                    <Formik
                                        initialValues={singleTours}
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
                                tours.map((tour, index) => (

                                    <tr key={index}>
                                        <td>{tour.tourName}</td>
                                        <td>{tour.startAddress}</td>
                                        <td>{tour.startDate}</td>
                                        <td>{tour.endDate}</td>
                                        <td>{tour.priceTour.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{tour.qtyPeople}</td>
                                        <td className="td-action">
                                            <Button onClick={() => handleShow(tour._id)} >  Edit </Button>
                                            <Button variant="danger" className="ml-2" onClick={() => handleDeleteTour(tour._id)} > Del </Button>
                                        </td>
                                    </tr>
                                ))}


                        </tbody>
                    </Table>
                </div>
            </div >
        </AdminLayout>
    );
}

PageAllTour.propTypes = {

}

export default PageAllTour
