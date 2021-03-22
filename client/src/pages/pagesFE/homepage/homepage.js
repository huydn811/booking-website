import React, { Component } from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.min.css';

import { Container, Row, Col} from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import {actFetchToursReq} from "../../../actions/actTour";
import "./homepage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { TOUR_IMG } from "../../../constants/Service";
import { connect } from "react-redux";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpenSlide : false
        }
    }
    componentDidMount(){
        this.props.onFectAllTour();
    }
    componentDidUpdate () {
        if(this.state.isOpenSlide === false){
            this.setState({
                isOpenSlide : !this.state.isOpenSlide
            })
        }
    }
    showSlide = (tourDestination) => {
        return (
            <Swiper lazy = {true}
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // EffectCube = {true}
                autoplay={{ delay: 3000 }} 
                loop = {true}
            >
                {this.showTopDestination(tourDestination)}
            </Swiper>
        )
    }
    showTopDestination = (tourDestination) => {
        let result = null;
        let items = [...tourDestination];
        let newItems = [];
        for (var i = 0; i < 5 && i <= newItems.length; i++) {
            var idx = Math.floor(Math.random() * items.length);
            newItems.push(items[idx]);
            items.splice(idx, 1);
        }
        if(newItems !== undefined) {
            result = newItems.map((item, idx)=> {
                if(item !== null && item !== undefined){
                    return (
                        <SwiperSlide className="swiperSlide" key = {idx}>
                            <div className="destination-item" >
                                <div className="img-destination-item">
                                    <NavLink  to={`/detail-tour/${item._id}`}>
                                        <img src={`${TOUR_IMG}/${item.avatarTour}`}/>
                                    </NavLink>
                                </div>
                                <div className="title-destination-item">
                                    <div className="title-item">
                                        <p>{item.tourName}</p>
                                    </div>
                                    {/* <Row>
                                        <Col lg={8}>
                                            <div className="title-item">
                                                <p>Cau Rong Da Nang</p>
                                            </div>
                                        </Col> */}
                                        {/* <Col lg={4}>
                                            <div className="title-item qty-tour">
                                                <p>38 Tours</p>
                                            </div>
                                        </Col> */}
                                    {/* </Row> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            })
        }
        return result;
    }
    showAllTours = (tours) => {
        var result = null;
        if(tours.length > 0) {
            result = tours.map((tour,index)=>{
                if(tour !== undefined){
                    return(
                        <Col key = {index} lg={4}>
                            <div className="our-tour-item">
                                <div className="img-tour-item">
                                    <NavLink className="navLink" to={`/detail-tour/${tour._id}`}>
                                        <img src={`${TOUR_IMG}/${tour.avatarTour}`}/>
                                    </NavLink>
                                </div>
                                <div className="name-tour">
                                    <NavLink  to={`/detail-tour/${tour._id}`}>
                                        <legend>{tour.tourName}</legend>
                                    </NavLink>
                                </div>
                                <div className="time-price-our-tour">
                                    <Row>
                                        <Col lg={7}>
                                            <div className="time-tour">
                                            <NavLink className="navLink-time-tour"  to={`/detail-tour/${tour._id}`}>
                                                <fieldset>EXPLORE</fieldset>
                                            </NavLink>
                                                <div className="icon-time">
                                                    {/* <img src="../../../img/icon-time.svg"/> */}
                                                    <i class="fas fa-arrow-right"></i>
                                                </div>   
                                                {/* <fieldset>5 Days / 4 Nights</fieldset> */}
                                                {/* <fieldset>Sale</fieldset> */}
                                                
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <div className="price-tour">
                                                <fieldset>{tour.priceTour}<span>₫/person</span></fieldset>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    )
                }
            })
        }
        return result;
    }
    render() {
        var {tours,search } = this.props;
        // // var isLogin = JSON.parse(localStorage.getItem("login"));
        // // var isLogin = this.props.login; //get data from redux
        // if(search){
        //     tours = tours.filter((tour)=> {
        //         return tour.tourName.toLowerCase().indexOf(search) !== -1;
        //     });
        // }
        // if(isLogin.isLogin === true){
            return(
                <div>
                    {/* <Header/> */}
                    <div className="homePage">
                       <Container>
                            <div className="top-destination">
                                <legend>Top Destination</legend>
                                <div className = "list-destination">
                                    {this.showSlide(tours)}
                                </div>
                            </div>
                            <div className="our-tour">
                                <div className="title-our-tour">
                                    <legend>Our Tours</legend>
                                </div>
                                <div className="list-our-tour">
                                    <Row>
                                        {this.showAllTours(tours)}
                                    </Row>
                                </div>
                            </div>
                            {/* <div className="travel-tip">
                                <div className="title-travel-trip">
                                    <legend>Travel Tips</legend>
                                </div>
                                <div className="img-travel-tip">
                                    <img src="../../../img/img-travel-tip.svg" />
                                </div>
                            </div> */}
                            <div className="travel-tip">
                                <div className="title-travel-trip">
                                    <legend>Travel Tips</legend>
                                </div>
                                <div className="slide-travel-tip">
                                    <Swiper
                                        autoplay={{ delay: 3000 }} 
                                        loop = {true}
                                        // spaceBetween={50}
                                        // slidesPerView={3}
                                        // navigation
                                        // pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        // onSwiper={(swiper) => console.log(swiper)}
                                        // onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/travel-tip-1.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/img-travel-tip.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/travel-tip-2.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/travel-tip3.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/travel-tip-4.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="img-slide-travel-tip">
                                                <img src="../../../../img/travel-tip-5.svg"/>
                                            </div>
                                        </SwiperSlide>
                                        
                                    </Swiper>
                                </div>
                            </div>
                        </Container> 
                    </div>
                    {/* <Footer/> */}
                </div>
            );
        // }
        // else {
        //     history.push("/login");
        //     return null;
        // }
    }
}
//mapStateToProps co 2 tham so tham so thu1 la currentState tham so thu 2 neeu dc truyen vao thi la object cua props da dc truyen cho component
const mapStateToProps = (state) => { //get
    return {
        login : state.login,
        tours : state.tour,
        search : state.search,
    }
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        onFectAllTour : () => {
            dispatch(actFetchToursReq());
        }
    }
}
export default  withRouter(connect(mapStateToProps,mapDisPatchToProps)(HomePage));