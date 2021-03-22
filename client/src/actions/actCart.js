import* as TypesCart from '../constants/ActionCart';

export const actAddToCart = (tour, quantity) => {
    return {
        type : TypesCart.ADD_TO_CART,
        tour,         //tour : tour
        quantity        // quantity : quantity
    }
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
