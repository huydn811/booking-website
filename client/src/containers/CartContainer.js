import React, { Component } from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

// import * as Message from '../constants/Message';
import CartItem from '../components/componentsFE/cart/CartItem';
import Cart from './../components/componentsFE/cart/Cart';
import CartResult from '../components/componentsFE/cart/CartResult';
import {actDeleteTourInCart,actUpdateTourInCart} from '../actions/actCart';

class CartContainer extends Component {
    render(){
        var { cart } = this.props;
        return(
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
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
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}


// CartContainer.propTypes = {
//     cart : PropTypes.arrayOf(PropTypes.shape({
//         tour : PropTypes.shape({
//             id : PropTypes.number.isRequired,
//             name : PropTypes.string.isRequired,
//             img : PropTypes.string.isRequired,
//             price : PropTypes.number.isRequired,
//             description : PropTypes.string,
//             inventory : PropTypes.number.isRequired,
//             rating : PropTypes.number.isRequired
//         }),
//         quantity : PropTypes.number.isRequired,
//     })).isRequired
// }

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