import * as TypesEmployee from '../constants/ActionTypeEmployee';
import callApi from "../utils/ApiCaller";


export const actFetchEmployeeReq = () => {
    return dispatch => {
        return callApi("employee/get-all-employee", "GET", null)
        .then((res) => {
            dispatch(actFetchEmployee(res.data))
        })
    }
}
export const actFetchEmployee = (employees) => {
    return {
        type : TypesEmployee.FECTH_EMPLOYEE,
        employees
    }
}

export const actAddEmployeeReq = (employee) => {
    return dispatch => {
        return callApi("employee/add-employee", "POST", employee)
        .then((res) => {
            dispatch(actAddEmployee(res.data))
        })
    }
}
export const actAddEmployee = (employee) => {
    console.log(employee, '[employee]');
    return {
        type : TypesEmployee.ADD_EMPLOYEE,
        employee
    }
}

export const actDeleteEmployeeReq = (id) =>{
    return dispatch => {
        return callApi(`employee/delete-employee/${id}`, "DELETE", null)
        .then((res)=>{
            dispatch(actDeleteEmployee(id))
        })
    }
}
export const actDeleteEmployee = (id) => {
    return {
        type : TypesEmployee.DELETE_EMPLOYEE,
        id
    }
}

export const actFectchEmployeeIDReq = (employeeID) => {
    return dispatch => {
        return callApi(`employee/get-employeeid/${employeeID}`, "GET" , null)
        .then((res) => {
            dispatch(actFectchEmployeeID(res.data))
        })
    }
}
export const actFectchEmployeeID = (employee) => {
    return {
        type : TypesEmployee.GET_EMPLOYEE_BY_ID,
        employee
    }
}

export const actUpdateEmployeeReq = (employee) => {
    console.log(employee, '[employee]');
    return dispatch => {
        return callApi(`employee/update-employee/${employee._id}`, "PUT", employee)
        .then((res)=>{
            dispatch(actUpdateEmployee(res.data))
        })
    }
}
export const actUpdateEmployee = (employee) => {
    return {
        type : TypesEmployee.UPDATE_EMPLOYEE,
        employee
    }
}
