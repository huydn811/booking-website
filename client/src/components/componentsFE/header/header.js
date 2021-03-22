import React, { Component } from "react";
import "./header.scss";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { USER_IMG } from "../../../constants/Service";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Container, Row , Col, Form} from "react-bootstrap"; 
import { connect } from "react-redux";
import { actSearchTour } from "../../../actions/actSearch";
// import "bootstrap/dist/css/bootstrap.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      statusLogin : true,
      statusDropdown : false,
      keyword : "",
    }
  }
  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  onClickSearch = (keyword) => {
    this.props.onSearch(keyword);
  }
  showMenu = (userIsLogging) => {
    if(userIsLogging.dataUserLogin === null) {
      return (
        <Link to="/login" className="dropdown-item has-icon text-danger">
          <i className="fas fa-sign-out-alt"></i> Login
        </Link>
      )
    }else{
      return (
        <Link 
          to="/" 
          className="dropdown-item has-icon text-danger"
          onClick = {this.handleLogout}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      )
    }
  }
  showUserIsLogin = (userIsLogin) => {
    if(userIsLogin.dataUserLogin === null){
      return (
        <>
          Hi,
        </>
      )
    }else {
      return (
        <>
          <img alt="image" src= {`${USER_IMG}/${userIsLogin.dataUserLogin.user.avatarUser}`}className="rounded-circle mr-1" />
              <div className="d-sm-none d-lg-inline-block">
              Hi,{userIsLogin.dataUserLogin.user.userName}
          </div>
        </>
      )
    }
  }
  
  handleLogout = () => {
    // localStorage.removeItem("persist:login");
    console.log(this.props.history, '[this.props.history]');
    console.log(this.props, '[this.props]');
  }
  
  render(){
    var { statusDropdown, keyword } = this.state;
    return(
        <div>
          <header>
            <div className="header">
              <div className="bg-header">
                <div className="slide-bg-header">
                  <Swiper
                    autoplay={{ delay: 3000 }} 
                    loop = {true}
                    // spaceBetween={50}
                    // slidesPerView={3}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-1.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-2.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-3.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-4.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-5.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-6.svg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img-slide-header">
                            <img src="../../../../img/bg-header-7.svg"/>
                        </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="menu-header">
                <Container>
                  <Row>
                    <Col lg={4}>
                      <div className="logo">
                        <div className="img-logo-header">
                          <NavLink exact className="navLink"  to="/">
                            <img src="../../../img/logo.svg"/>
                          </NavLink>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="menu">
                        <div className="list-menu">
                          <ul>
                            <li>
                              <NavLink exact className="navLink"  to="/">HOME</NavLink>
                            </li>
                            <li>
                              <NavLink className="navLink" to="/all-tour">TOUR</NavLink>
                            </li>
                            <li>
                              <a className="navLink" target="_blank" href="https://blog.traveloka.com/vn/">BLOG</a>
                            </li>
                            <li>
                              <a className="navLink" target="_blank" href="https://www.weather-forecast.com/locations/Da-Nang/forecasts/latest">WEATHER</a>
                            </li>
                            <li 
                              className="dropdown"
                              onClick = { ()=> this.setState({statusDropdown : !statusDropdown})}>
                              <NavLink to="#" data-toggle="dropdown" className="navLink nav-link dropdown-toggle nav-link-lg nav-link-user">
                                {this.showUserIsLogin(this.props.userIsLogging)}
                              </NavLink>
                              <div className={`dropdown-menu dropdown-menu-right ${statusDropdown ? 'd-block active' : 'none'}`}>
                                <Link to="features-profile.html" className="dropdown-item has-icon">
                                    <i className="far fa-user"></i> Profile
                                </Link>
                                <Link to="/my-cart" className="dropdown-item has-icon">
                                  <i className="fas fa-shopping-bag"></i> My Tours
                                </Link>
                                <Link to="#" className="dropdown-item has-icon">
                                  <i className="fas fa-bolt"></i> Activities
                                </Link>
                                <Link to="features-settings.html" className="dropdown-item has-icon">
                                  <i className="fas fa-cog"></i> Settings
                                </Link>
                                <div className="dropdown-divider"></div>
                                {this.showMenu(this.props.userIsLogging)}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="search-tour">
                <Container>
                  <div className="bg-search-tour">
                    <div className="input-search-tour">
                      <Form>
                        <Form.Control 
                          className="input-search" 
                          placeholder="Find Tour"
                          type="text" 
                          name = "keyword"
                          value = { keyword }
                          onChange = { this.handleOnChangeInput} 
                        />
                      </Form>
                      <div className="button-find">
                        <button 
                          type="button"
                          onClick = { () => this.onClickSearch(keyword) }
                        >
                          <span>Find</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </header>
      </div>
    );
  } 
}

const mapStateToProps = (state) => { //get 
  return {
    userIsLogging : state.login,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch : (keyword) => {
      dispatch(actSearchTour(keyword))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(Header));