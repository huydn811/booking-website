import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import "./pageAllTour.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchToursReq } from "../../../actions/actTour";
import { TOUR_IMG } from "../../../constants/Service";
class pageAllTour extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllTour();
    }

    showAllTours  = (tours) => {
        var result = null;
        if(tours.length > 0) {
            result = tours.map((tour, index) => {
                if(tour !== undefined) {
                    return(
                        <Col lg={4} key = {index}>
                            <div className="our-tour-item">
                                <div className="img-tour-item">
                                    <NavLink className="navLink" to={`/detail-tour/${tour._id}`}>
                                        <img src={`${TOUR_IMG}/${tour.avatarTour}`}/>
                                    </NavLink>
                                </div>
                                <div className="name-tour">
                                    <NavLink to = {`/detail-tour/${tour._id}`}>
                                        <legend>{tour.tourName}</legend>
                                    </NavLink>
                                </div>
                                <div className="time-price-our-tour">
                                    <Row>
                                        <Col lg={7}>
                                            <div className="time-tour">
                                                <div className="icon-time">
                                                    <img src="../../../img/icon-time.svg"/>
                                                </div>
                                                <fieldset>5 Days / 4 Nights</fieldset>
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
        var { tours } = this.props;
        return (
            <div>
                <Container>
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
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tours : state.tour
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        fetchAllTour : () => {
            dispatch(actFetchToursReq());
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps) (pageAllTour);