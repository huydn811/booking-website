import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import "./Cart.scss";
// import { actGetCartReq } from "../../../actions/actCart";
class Cart extends Component {
    render(){
        return (
            <div className="pageCart">
                <Container>
                    <section className="section">
                        <div className="table-responsive">
                            <table className="table product-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Tour</th>
                                        <th>Price Tour/person</th>
                                        <th>Amount person Join Tour</th>
                                        <th>Total Price</th>
                                        <th>Status</th>
                                        <th></th>
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
        )
    }
}
export default Cart;