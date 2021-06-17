import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
import 'swiper/components/effect-cube/effect-cube.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrivateLayout } from '../PrivateLayout';
import AppNotFound from '../../components/AppNotFound';
import 'swiper/swiper.scss';
import './homepage.scss';

import { getAllTourType, getChatRoomById } from '../../redux/actionTypes';
import { Spin } from 'antd';
import { TOUR_IMG } from '../../utils';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // window.location.reload();
    dispatch({ type: getAllTourType.request });
  }, [dispatch])


  const {
    loadingState: { loadingGetAllTour, loadingSearch },
    authState: { token }
  } = useSelector((currentState) => currentState);

  const { tourState: { tours }, } = useSelector(currentState => currentState)


  const renderSlide = () => (
    <Swiper
      lazy
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      loop
    >
      {showTopDestination(tours)}
    </Swiper>
  );

  const showTopDestination = (tourDestination) => {
    let result = null;
    const items = [...tourDestination];
    const newItems = [];
    for (let i = 0; i < 5 && i <= newItems.length; i += 1) {
      const idx = Math.floor(Math.random() * items.length);
      newItems.push(items[idx]);
      items.splice(idx, 1);
    }
    // eslint-disable-next-line no-console
    if (newItems !== undefined) {
      result = newItems.map((item, idx) => {
        if (item !== null && item !== undefined) {
          return (
            <SwiperSlide className="swiperSlide" key={idx}>
              <div className="destination-item">
                <div className="img-destination-item">
                  <NavLink to={`/all-tour/${item._id}`}>
                    {/* <img src={`${TOUR_IMG}/${item.avatar}`} alt="" /> */}
                    <img
                      src="https://picsum.photos/200
"
                      alt=""
                    />
                  </NavLink>
                </div>
                <div className="title-destination-item">
                  <div className="title-item">
                    <p>{item.tourName}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        }
        return null;
      });
    }
    return result;
  };

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


  if (loadingGetAllTour && !token) return <Spin />;

  return (
    <PrivateLayout>
      <div>
        {/* <Header/> */}
        <div className="homePage">
          <Container>
            <div className="our-tour">
              <div className="title-our-tour">
                <legend>Our Tours</legend>
              </div>
              <div className="list-our-tour">
                <Row>
                  {loadingSearch && <Spin />}

                  {showAllTours()}
                </Row>
              </div>
            </div>

            <div className="top-destination">
              <legend>Top Destination</legend>
              <div className="list-destination">
                {renderSlide()}
              </div>
            </div>

            <div className="travel-tip">
              <div className="title-travel-trip">
                <legend>Travel Tips</legend>
              </div>
              <div className="slide-travel-tip">
                <Swiper
                  autoplay={{ delay: 3000 }}
                  loop
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <div className="img-slide-travel-tip">
                      <img
                        src="https://picsum.photos/200
"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </Container>
        </div>
        {/* <Footer/> */}
      </div>
    </PrivateLayout>
  );
};

export default HomePage;
