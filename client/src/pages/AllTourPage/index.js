import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './pageAllTour.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getAllTourType } from '../../redux/actionTypes';

import { PrivateLayout } from '../PrivateLayout'


const PageAllTour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: getAllTourType.request });
  }, [dispatch])

  const { tourState: { tours }, } = useSelector(currentState => currentState)

  const showAllTours = () => {
    let result = null;
    if (tours.length > 0) {
      result = tours.map((tour, index) => {
        if (tour !== undefined) {
          return (
            <Col lg={4} key={index}>
              <div className="our-tour-item">
                <div className="img-tour-item">
                  <NavLink className="navLink" to={`/all-tour/${tour._id}`}>
                    {/* <img src={`${TOUR_IMG}/${tour.avatarTour}`} alt="" /> */}
                    <img src='https://picsum.photos/200' alt="" />

                  </NavLink>
                </div>
                <div className="name-tour">
                  <NavLink to={`/all-tour/${tour._id}`}>
                    <legend>{tour.tourName}</legend>
                  </NavLink>
                </div>
                <div className="time-price-our-tour">
                  <Row>
                    <Col lg={7}>
                      <div className="time-tour">
                        <div className="icon-time">
                          <img src="../../../img/icon-time.svg" alt="" />
                        </div>
                        <fieldset>5 Days / 4 Nights</fieldset>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="price-tour">
                        <fieldset>
                          {tour.priceTour}
                          <span>₫/person</span>
                        </fieldset>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          );
        }
      });
    }
    return result;
  }

  return (
    <PrivateLayout>


      <div>
        <Container>
          <div className="our-tour">
            <div className="title-our-tour">
              <legend>Our Tours</legend>
            </div>
            <div className="list-our-tour">
              <Row>
                {showAllTours()}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </PrivateLayout>

  )
}

export default PageAllTour
