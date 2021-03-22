import React, { Component } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { connect } from 'react-redux';
class orderPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "order-page">
                <Container>
                    <legend>aaaaaaaaaaaaaaaaaaaaa</legend>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Please enter your email if you change email 
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Number Phone" />
                            <Form.Text className="text-muted">
                                Please enter your number phone if you change number phone 
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Tour Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Start Address" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Start Date" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="End Date" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Amount People Join" />
                            <Form.Text className="text-muted">
                            Please enter the number of participants for the tour
                            (the number of participants cannot be greater than the default tour participant)
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Price Tour" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = (state) => { //get 
    return {
      userIsLogging : state.login
    }
}
export default connect(mapStateToProps, null) (orderPage);