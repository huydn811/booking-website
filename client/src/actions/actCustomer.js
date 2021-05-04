import * as TypesCustomer from '../constants/ActionTypeCustomer';
import callApi from '../utils/ApiCaller';

export const actFetchAllCustomer = (customers) => ({
  type: TypesCustomer.FETCH_ALL_CUSTOMER,
  customers,
});

export const actFetchAllCustomerReq = () => (dispatch) => callApi('customer/get-customer', 'GET', null)
  .then((res) => {
    dispatch(actFetchAllCustomer(res.data));
  });

export const actAddCustomer = (customer) => ({
  type: TypesCustomer.ADD_CUSTOMER,
  customer,
});

export const actAddCustomerReq = (customer) => (dispatch) => callApi('customer/create-customer', 'POST', customer)
  .then((res) => {
    dispatch(actAddCustomer(res.data));
  });
