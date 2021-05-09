import * as TypesEmployee from '../constants/ActionTypeEmployee';

const initialStateEmployee = [];
const findIndex = (tours = [], id) => {
  let result = -1;
  tours.forEach((tour, index) => {
    if (tour._id === id) {
      result = index;
    }
  });
  return result;
};

const employees = (state = initialStateEmployee, action) => {
  let index = -1;
  const employeeID = action.id;
  const { employee } = action;
  switch (action.type) {
    case TypesEmployee.FETCH_EMPLOYEE:
      state = action.employees;
      return [...state];
    case TypesEmployee.ADD_EMPLOYEE:
      state.push(action.employee);
      return [...state];
    case TypesEmployee.DELETE_EMPLOYEE:
      index = findIndex(state, employeeID);
      state.splice(index, 1);
      return [...state];
    case TypesEmployee.UPDATE_EMPLOYEE:
      index = findIndex(state, action.employee._id);
      state[index] = employee;
      return [...state];
    default:
      return [...state];
  }
};

export default employees;
