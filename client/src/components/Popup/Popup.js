import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actAddCustomerReq } from '../../actions/actCustomer';
import { actAddToCartAPIReq } from '../../actions/actCart';
import './Popup.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmCustomer: {
        nameCustomer: '',
        genderCustomer: '',
        identityCard: '',
        addressCustomer: '',
        numberPhoneCustomer: '',
        nationalityCustomer: '',
        email: '',
      },
    };
  }

    handleOnChange = (e) => {
      this.setState({
        frmCustomer: {
          ...this.state.frmCustomer,
          [e.target.name]: e.target.value,
        },
      });
    }

    handleOnSubmit = (e) => {
      e.preventDefault();
      const customer = this.state.frmCustomer;
      const thisProps = this.props;
      const { tourInCart } = this.props;
      const userID = this.props.userAddToCart.dataUserLogin.user._id;
      const myPromis = new Promise((myResolve, myReject) => {
        thisProps.onAddCustomer(customer);
        thisProps.onAddToCart({
          userID,
          tourInCart,
        });
        myResolve(
          'aaaaaaaaaa',
        );
        myReject(
          'bbbbbbbb',
        );
      });
      myPromis.then(() => {
        //    history.push("/admin/all-user");
      });
      localStorage.removeItem('CART');
    }

    render() {
      const {
        nameCustomer,
        genderCustomer,
        identityCard,
        addressCustomer,
        numberPhoneCustomer,
        nationalityCustomer,
        email,
      } = this.state;
      return (
        <div className="popup">
          <Container>
            <div className="title-popup">
              <Form.Label>Please enter your details</Form.Label>
            </div>
            <div className="form-order-tour">
              <Form onSubmit={this.handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="nameCustomer"
                    value={nameCustomer}
                    onChange={this.handleOnChange}
                  />
                  {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Number Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Number Phone"
                    name="numberPhoneCustomer"
                    value={numberPhoneCustomer}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Gender"
                    name="genderCustomer"
                    value={genderCustomer}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="addressCustomer"
                    value={addressCustomer}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Identity Card</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Identity Card"
                    name="identityCard"
                    value={identityCard}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasic">
                  <Form.Label>Nationnal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nationnal"
                    name="nationalityCustomer"
                    value={nationalityCustomer}
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree" />
                        </Form.Group> */}
                <Button type="submit" variant="warning">Submit</Button>
              </Form>
            </div>
          </Container>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  tourInCart: state.cart,
  userAddToCart: state.login,
});
const mapDisPatchToProps = (dispatch, props) => ({
  onAddCustomer: (customer) => {
    dispatch(actAddCustomerReq(customer));
  },
  onAddToCart: (tour) => {
    dispatch(actAddToCartAPIReq(tour));
  },
});

export default connect(mapStateToProps, mapDisPatchToProps)(Popup);
