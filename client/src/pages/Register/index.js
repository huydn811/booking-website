import React, { useRef, useState, memo, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { registerType } from '../../redux/actionTypes'

import './pageRegister.scss';

const PageRegister = () => {

  const [state, setState] = useState({})
  const [file, setFile] = useState(null)

  const dispatch = useDispatch()


  const history = useHistory();
  const fileInput = useRef();


  const { loadingState: loadingRegister } = useSelector(currentState => currentState)


  const onChange = (e) => {
    setState((cs) => ({ ...cs, [e.target.name]: e.target.value }))
  }
  const onChangeFile = () => {
    let fileZero = fileInput.current.files[0];
    setFile(() => (fileZero))
  }


  const onSubmit = (e) => {
    e.preventDefault();
    const newData = new FormData();
    newData.append('userName', state.userName);
    newData.append('numberPhoneUser', state.numberPhoneUser);
    newData.append('avatar', file);
    newData.append('email', state.email);
    newData.append('password', state.password);

    dispatch({ type: registerType.request, payload: newData, history })
  }

  return (
    <div className="pageRegister">
      <section className="section">
        <div className="d-flex flex-wrap align-items-stretch">
          <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
            <div className="p-4 m-3">
              <img src="../../../img/logoLogin.svg" alt="logo" width="80" className="shadow-light rounded-circle mb-5 mt-2" />
              <h4 className="text-dark font-weight-normal">
                Welcome to
                  <span className="font-weight-bold">DTU TOUR</span>
              </h4>
              <p className="text-muted">Create account</p>
              <Form className="form_" onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="User Name"
                    name="userName"
                    onChange={onChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={onChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="password"
                    placeholder="reply password"
                    name="password"
                    onChange={onChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={onChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="number phone"
                    name="numberPhoneUser"
                    onChange={onChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <input type="file" ref={fileInput} id="myfile" onChange={onChangeFile} name="myfile" />
                </Form.Group>

                <div className="form-group text-right">

                  <Button type="submit" className="btn btn-primary btn-lg btn-icon icon-right" tabIndex="4">
                    Sign Up
                                  </Button>
                </div>

              </Form>
            </div>
          </div>
          <div className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom">
            <div className="imgBGLogin" style={{ width: '100%' }}>
              <img style={{ width: '100%' }} src="../../../../img/logoLogin.svg" />
            </div>
            <div className="absolute-bottom-left index-2">
              <div className="text-light p-5 pb-2">
                <div className="mb-5 pb-3">
                  <h5 className="mb-2 display-4 font-weight-bold">WellCome To WanderLust - Tour</h5>
                  {/* <h5 className="font-weight-normal text-muted-transparent">Bali, Indonesia</h5> */}
                </div>
                  Photo by
                  {' '}
                <a className="text-light bb" target="_blank" href="https://unsplash.com/photos/a8lTjWJJgLA" rel="noreferrer">Justin Kauffman</a>
                {' '}
                  on
                  <a className="text-light bb" target="_blank" href="https://unsplash.com" rel="noreferrer">Unsplash</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default memo(PageRegister);
