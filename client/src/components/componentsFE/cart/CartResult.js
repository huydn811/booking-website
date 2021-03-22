import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartResult extends Component {
    
    showTotalAmount = (cart) => {
        var total = 0;
        if(cart.length > 0) {
            for(var i = 0; i < cart.length; i++){
                total += cart[i].tour.priceTour * cart[i].quantity;
            }
        }
        return total;
    }
    
    render(){
        var {cart} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-warning waves-effect waves-light">Accept
                        {/* <i className="fa fa-angle-right right"></i> */}
                    </button>
                </td>
            </tr>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cart : state.cart
//     }
// }

export default connect(null, null) (CartResult);
