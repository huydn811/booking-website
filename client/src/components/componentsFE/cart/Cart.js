import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.scss';
import Popup from '../../Popup/Popup';
// import { actGetCartReq } from "../../../actions/actCart";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenPopup: false,
    };
  }
  // onClickAccept = () => {
  //     let isOpenPopup = this.state.isOpenPopup;
  //     this.setState({
  //         isOpenPopup : !isOpenPopup
  //     });
  //     if(isOpenPopup === true) {
  //         this.showPopup()
  //     }else {
  //         return;
  //     }
  // }

  // showPopup = () => {
  //     return(this.state.isOpenPopup === true) ? (
  //         <Popup/>
  //     ) : ""
  // }
  render() {
    return (
      <div className="pageCart">
        <Container>
          <section className="section">
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th />
                    <th>Tour</th>
                    <th>Price Tour/person</th>
                    <th>Amount person Join Tour</th>
                    <th>Total Price</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                </tbody>
              </table>
            </div>
          </section>

        </Container>
      </div>
    );
  }
}
export default Cart;
