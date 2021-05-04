import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import * as Message from '../constants/Message';
import CartItem from '../components/componentsFE/cart/CartItem';
import Cart from '../components/componentsFE/cart/Cart';
import CartResult from '../components/componentsFE/cart/CartResult';
import Popup from '../components/Popup/Popup';
import { actDeleteTourInCart, actUpdateTourInCart } from '../actions/actCart';

class CartContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpenPopup: false,
    };
  }

  handleOnclickAccept = () => {
    const { isOpenPopup } = this.state;
    this.setState({
      isOpenPopup: !isOpenPopup,
    });
  }

  showPopup = () => {
    const { isOpenPopup } = this.state;
    if (isOpenPopup) return <Popup />;
    return null;
  }

  showCartItem = (cart) => {
    const {
      onDeleteProductInCart,
      // onChangeMessage,
      onUpdateProductInCart,
    } = this.props;

    if (cart.length > 0) {
      const result = cart.map((item, index) => (
        <CartItem
          key={index}
          item={item} // item la sp va soluong mua
          index={index}
          onDeleteProductInCart={onDeleteProductInCart}
          // onChangeMessage = { onChangeMessage }
          onUpdateProductInCart={onUpdateProductInCart}
        />
      ));
      return result;
    }
  }

  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = (
        <CartResult
          handleOnclickAccept={this.handleOnclickAccept}
          cart={cart}
        />
      );
    }
    return result;
  }

  render() {
    const { cart } = this.props;
    return (
      <>
        <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
        </Cart>
        <div className="popup-accept">
          {this.showPopup()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart, // props la cart => cac sp trong gio hang
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteProductInCart: (product) => {
    dispatch(actDeleteTourInCart(product));
  },

  onUpdateProductInCart: (product, quantity) => {
    dispatch(actUpdateTourInCart(product, quantity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
