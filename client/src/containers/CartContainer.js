import React, { Component } from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

// import * as Message from '../constants/Message';
import CartItem from '../components/componentsFE/cart/CartItem';
import Cart from './../components/componentsFE/cart/Cart';
import CartResult from '../components/componentsFE/cart/CartResult';
import Popup from "../components/Popup/Popup";
import {actDeleteTourInCart,actUpdateTourInCart} from '../actions/actCart';

class CartContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenPopup : false,
        }
    }

    // truyen prop func cho cart result
    handleOnclickAccept = () => {
        let isOpenPopup = this.state.isOpenPopup;
        this.setState({
            isOpenPopup : !isOpenPopup
        })
        if(isOpenPopup === true){
            console.log("aaaaaaaaa", '["aaaaaaaaa"]');
        }else {
            return;
        }
    }

    showPopup = () => {
        return(this.state.isOpenPopup === true) ? (
            <Popup/>
        ) : ""
    }

    render(){
        var { cart } = this.props;
        return(
            <>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
                <div className = "popup-accept">
                    {this.showPopup()}
                </div>
            </>
        )
    }
    showCartItem = (cart) => {
        var { 
            onDeleteProductInCart, 
            // onChangeMessage, 
            onUpdateProductInCart 
        } = this.props;
        // var result = <tr>
        //                 <td>
        //                     {Message.MSG_CART_EMPTY}
        //                 </td>
        //             </tr>;
        if(cart.length >0 ){
            var result = cart.map((item,index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}            //item la sp va soluong mua  
                        index={index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        // onChangeMessage = { onChangeMessage }
                        onUpdateProductInCart = { onUpdateProductInCart }
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult 
                        handleOnclickAccept = {this.handleOnclickAccept} 
                        cart={cart}
                    />
        }
        return result;
    }
}


const mapStateToProps = (state) => {
    return {
        cart : state.cart                      //props la cart => cac sp trong gio hang
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {                    //props tham so la product
            dispatch(actDeleteTourInCart(product))
        },
        // onChangeMessage : (message) => {
        //     dispatch(actChangeMessage(message))
        // },
        onUpdateProductInCart : (product, quantity) => {
            dispatch(actUpdateTourInCart(product, quantity))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);