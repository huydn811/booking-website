import * as TypesCart from "../constants/ActionCart";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//     {
//         tour : {
//             avatarTour: "121241321_670001800616075_329923169218267049_o.jpg",
//             descriptionTour: "Tour Buon Ma Thuot 5 ngay",
//             detailTour: "123123",
//             endDate: "25/12/2020",
//             priceTour: 10,
//             qtyPeople: 1,
//             startAddress: "Da Nang",
//             startDate: "20/12/2020",
//             tourID: "tour12",
//             tourName: "Tour Da Lat",
//             __v: 0,
//             _id: "5fed50316738e70ce81f82a2",
//         },
//         quantity : 5,
//     },
//     {
//         tour : {
//             avatarTour: "121241321_670001800616075_329923169218267049_o.jpg",
//             descriptionTour: "Tour Buon Ma Thuot 5 ngay",
//             detailTour: "123123",
//             endDate: "25/12/2020",
//             priceTour: 10,
//             qtyPeople: 1,
//             startAddress: "Da Nang",
//             startDate: "20/12/2020",
//             tourID: "tour12",
//             tourName: "Tour Da Lat",
//             __v: 0,
//             _id: "5fed50316738e70ce81f82a2",
//         },
//         quantity : 2,
//     }
// ]
// const persistConfig = {
//     key: 'cart', //key localstorega
//     storage: storage,
//     // blacklist: [] //k bi thay doi hoac k dua va localstorage
// };
var findTourInCart = (cart, tour) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length ; i++){
            if(cart[i].tour._id === tour._id){
                index = i;
                break;
            }
        }
    }
    return index;
}
const Cart = (state = initialState, action) => {
    var {tour, quantity} = action;
    var index = -1;       //k tim thay index = -1
    switch(action.type){
        case TypesCart.ADD_TO_CART : {
            index = findTourInCart(state, tour);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({ tour, quantity});
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        }
        case TypesCart.DELETE_TOUR_IN_CART : {
            index = findTourInCart(state, tour);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]; 
        }
        case TypesCart.UPDATE_TOUR_IN_CART : {
            index = findTourInCart(state, tour);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        default : return [...state];
    }
    // switch(action.type){
    //     case TypesCartCart.GET_CART:
    //         state = action.cart
    //         console.log(state, '[state]');
    //         return {...state}
    //     case TypesCartCart.ADD_TO_CART:
    //         return {...state};
    //     default : return {...state};
    // }
}

// export default persistReducer(persistConfig,Cart);
export default Cart;