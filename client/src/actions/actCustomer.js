import * as TypesCustomer from "../constants/ActionTypeCustomer";
import callApi from "../utils/ApiCaller";

export const actFetchAllCustomerReq = () => {
    return dispatch => {
        return callApi("customer/get-customer", "GET", null)
        .then((res) => {
            dispatch(actFetchAllCustomer(res.data))
        })
    }
}
export const actFetchAllCustomer = (customers) => {
    return{
        type : TypesCustomer.FETCH_ALL_CUSTOMER,
        customers
    }
}

export const actAddCustomerReq = (customer) => {
    return dispatch => {
        return callApi("customer/create-customer", "POST", customer)
        .then((res) => {
            dispatch(actAddCustomer(res.data))
        })
    }
}
export const actAddCustomer = (customer) => {
    return {
        type : TypesCustomer.ADD_CUSTOMER,
        customer
    }
}