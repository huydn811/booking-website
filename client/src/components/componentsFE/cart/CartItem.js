import React, { Component } from 'react';
import { connect } from "react-redux";
import { actUpdateTourInCart } from "../../../actions/actCart";
import { TOUR_IMG } from "../../../constants/Service";
import "./cartItem.scss";
// import * as Message from '../components/constants/Message';
class CartItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            quantity : 1
        }
    }
    showSubTotal = (price, quantity) => {
        return price*quantity;
    }
    
    onDelete = (tour) => {
        var { onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(tour);
        // onChangeMessage(Message.MSG_DELETE_CART_SUCCES);
    }

    onUpdateQuantity = (tour, quantity) => {
        var { onUpdateProductInCart, onChangeMessage } = this.props;
        if(quantity > 0){
            this.setState({
                quantity : quantity
            })
            onUpdateProductInCart(tour, quantity);
            // onChangeMessage(Message.MSG_UPDATE_CART_SUCCES);    
        }
    }
    render(){
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <div className="img_item_in_cart">
                        <img src={`${TOUR_IMG}/${item.tour.avatarTour}`}
                            // alt={val.tour.tour.tourName} className="img-fluid z-depth-0" 
                        />
                    </div>
                </th>
                <td>
                    <h5>
                        <strong>{item.tour.tourName}</strong>
                    </h5>
                </td>
                <td>{item.tour.priceTour}$</td>
                <td className="center-on-small-only">
                        <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-warning btn-rounded waves-effect waves-light"
                            onClick = {()=> {this.onUpdateQuantity(item.tour, item.quantity - 1)}}
                        >
                            {/* <a href='/my-cart/#'>—</a> */}
                            <span href='/my-cart/#'>—</span> 
                        </label>
                        <label 
                            className="btn btn-sm btn-warning btn-rounded waves-effect waves-light"
                            onClick = {()=> {this.onUpdateQuantity(item.tour, item.quantity + 1)}}
                        >
                            {/* <a href='/my-cart/#'>+</a> */}
                            <span href='/my-cart/#'>+</span> 
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.tour.priceTour, item.quantity)}$</td>
                <td>pending...</td>
                <td>
                    <button 
                        className="btn btn-sm btn-danger waves-effect waves-light" 
                        type="button" 
                        title="" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        data-original-title="Remove item"
                        onClick={() => {this.onDelete(item.tour)}}
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }
    
}

// const mapStateToProps = (state) => {
//     return {
//         item : state.cart,
//     }
// }
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateProductInCart : (tour, quantity) => {
            dispatch(actUpdateTourInCart(tour,quantity))
        }
    }
}
export default connect(null,mapDispatchToProps) (CartItem);