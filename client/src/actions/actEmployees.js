import * as TypesEmployee from '../constants/ActionTypeEmployee';
import callApi from '../utils/ApiCaller';

export const actFetchEmployee = (employees) => ({
  type: TypesEmployee.FETCH_EMPLOYEE,
  employees,
});

export const actFetchEmployeeReq = () => (dispatch) => callApi('employee/get-all-employee', 'GET', null)
  .then((res) => {
    dispatch(actFetchEmployee(res.data));
  });

export const actAddEmployee = (employee) => ({
  type: TypesEmployee.ADD_EMPLOYEE,
  employee,
});

export const actAddEmployeeReq = (employee) => (dispatch) => callApi('employee/add-employee', 'POST', employee)
  .then((res) => {
    dispatch(actAddEmployee(res.data));
  });

export const actDeleteEmployee = (id) => ({
  type: TypesEmployee.DELETE_EMPLOYEE,
  id,
});

export const actDeleteEmployeeReq = (id) => (dispatch) => callApi(`employee/delete-employee/${id}`, 'DELETE', null)
  .then(() => {
    dispatch(actDeleteEmployee(id));
  });

export const actFetchEmployeeID = (employee) => ({
  type: TypesEmployee.GET_EMPLOYEE_BY_ID,
  employee,
});

export const actFetchEmployeeIDReq = (employeeID) => (dispatch) => callApi(`employee/get-employeeid/${employeeID}`, 'GET', null)
  .then((res) => {
    dispatch(actFetchEmployeeID(res.data));
  });

export const actUpdateEmployee = (employee) => ({
  type: TypesEmployee.UPDATE_EMPLOYEE,
  employee,
});

export const actUpdateEmployeeReq = (employee) => (dispatch) => callApi(`employee/update-employee/${employee._id}`, 'PUT', employee)
  .then((res) => {
    dispatch(actUpdateEmployee(res.data));
  });
