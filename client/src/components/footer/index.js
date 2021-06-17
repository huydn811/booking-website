import React, {Component} from 'react';
import './footer.scss';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';
import {Container, Row, Col, Form} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="bg-footer">
                        <div className="img-bg-footer">
                            <img src="../../../img/img-bg-footer.svg" alt="" />
                        </div>
                    </div>
                    <div className="subscribeToOur">
                        <Container>
                            <div className="bg-subscribeToOur">
                                <legend>Subscribe to Our Newsletter</legend>
                                <div className="input-subscribe-footer">
                                    <Form>
                                        <Form.Control
                                            className="input-subs"
                                            type="text"
                                            placeholder="Your Email"
                                        />
                                    </Form>
                                    <div className="button-subs">
                                        <button type="submit">
                                            <span>Send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="footer-bottom">
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className="footer-bottom-item-left">
                                        <div className="logo-footer">
                                            <div className="img-logo-footer">
                                                <img
                                                    src="../../../img/logo-footer.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="description-footer-item-left">
                                            <p>
                                                Sed vel molestie libero, ac
                                                vestibulum nunc. Vivamus quis
                                                nibh Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Ad, neque?
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="footer-bottom-item-right">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Solutions
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Tours
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Destinations
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Pricing
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Testimonials
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Quick links
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Discover
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Upcoming
                                                                    Tours
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Payment
                                                                    Options
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    FAQs
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="item-right">
                                                    <div className="list-menu">
                                                        <legend>
                                                            Resources
                                                        </legend>
                                                        <ul>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Terms of Use
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Privacy
                                                                    Policy
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Security
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    className="navLink-footer"
                                                                    to="#"
                                                                >
                                                                    Information
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
