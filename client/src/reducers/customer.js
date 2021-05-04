import * as TypesCustomer from '../constants/ActionTypeCustomer';

const initialState = [];
// var findIndex = (tours, id) => {
//     var result = -1;
//     tours.forEach((tour, index) => {
//         if(tour._id === id){
//             result = index;
//         }
//     });
//     return result;
// }

const customers = (state = initialState, action) => {
  switch (action.type) {
    case TypesCustomer.FETCH_ALL_CUSTOMER:
      state = action.customers;
      return [...state];
    case TypesCustomer.ADD_CUSTOMER:
      state.push(action.customer);
      return [...state];
    default:
      return [...state];
  }
};

export default customers;
