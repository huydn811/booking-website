import* as TypesCart from '../constants/ActionCart';
import callApi from '../utils/ApiCaller';

export const actAddToCart = (tour, quantity) => {
    return {
        type : TypesCart.ADD_TO_CART,
        tour,         //tour : tour
        quantity        // quantity : quantity
    }
}

export const actAddToCartAPIReq = (cart) => {
    return dispatch => {
        return callApi("add-to-cart", "POST", cart)
        .then((res) => {
            dispatch(actAddToCartAPI(res.data))
        })
    }
}
export const actAddToCartAPI = (cart) => {
    // return {
    //     type : TypesCart.ADD_TO_CART,
    //     cart, 
    // }
}

export const actDeleteTourInCart = (tour) => {
    return {
        type : TypesCart.DELETE_TOUR_IN_CART,
        tour //tour : tour
    }
}

export const actUpdateTourInCart = (tour,quantity) => {
    return { 
        type : TypesCart.UPDATE_TOUR_IN_CART,
        tour,
        quantity
    }
}
