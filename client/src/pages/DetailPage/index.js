import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import AppNotFound from '../../components/AppNotFound'
import { PrivateLayout } from '../PrivateLayout';

import { getTourByIdType, bookingType } from '../../redux/actionTypes'

import './detailpage.scss';
import { Spin } from 'antd';

const DetailPage = () => {

  const dispatch = useDispatch()

  const { tourID } = useParams();

  useEffect(() => {
    dispatch({ type: getTourByIdType.request, payload: tourID })
  }, [dispatch, tourID])

  const { loadingState: { loadingGetTourById }, tourState: { singleTours } } = useSelector((cS) => cS)


  const showDetailTour = (tour) => {
    if (tour) {

        // eslint-disable-next-line no-console
      console.log(tour, '<-tour---');
      return (
        <div className="detail-tour">
          <div className="title-detail-tour">
            <legend>{tour.tourName}</legend>
          </div>
          <div className="img-detail-tour">
            {/* <img src={`${TOUR_IMG}/${tour.avatarTour}`} alt="" /> */}
            <img src='https://picsum.photos/200' style={{
              width: 200
            }} alt="" />
          </div>
          <div className="description-detail-tour">
            <div className="description-detail">
              <div className="title-description-detail">
                <legend>Description</legend>
              </div>
              <div className="description-detail-zone">
                {tour.descriptionTour}
              </div>
            </div>
          </div>
          <div className="description-detail-tour">
            <div className="description-detail">
              <div className="title-description-detail">
                <legend>Detail</legend>
              </div>
              <div className="description-detail-zone">
                {tour.detailTour}
              </div>
            </div>
          </div>
        </div>
      );
    }

  }


  const onHandleAdd = () => {
    dispatch({ type: bookingType.request, payload: singleTours })
  }

  return (
    <PrivateLayout>
      {
        loadingGetTourById ? (
          <Spin />
        ) : (
          <div className="detail-page">
            <Container>
              {showDetailTour(singleTours)}
              <div className="btn-order-tour">
                <Button
                  variant="warning"
                  onClick={onHandleAdd}
                >
                  Add To Cart
              </Button>
              </div>
            </Container>
          </div>
        )
      }
    </PrivateLayout>

  )
}


export default DetailPage;
