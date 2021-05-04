import * as TypesUser from '../constants/ActionTypeUser';
import callApi from '../utils/ApiCaller';

export const actFetchAllUser = (users) => ({
  type: TypesUser.FETCH_ALL_USER,
  users,
});

export const actFetchAllTUserReq = () => (dispatch) => callApi('user/get-all-user', 'GET', null)
  .then((res) => {
    dispatch(actFetchAllUser(res.data));
  });

export const actAddUser = (user) => ({
  type: TypesUser.ADD_USER,
  user,
});
export const actAddUserReq = (user) => (dispatch) => callApi('user/add-user', 'POST', user)
  .then((res) => {
    dispatch(actAddUser(res.data));
  });

export const actDeleteUser = (userID) => ({
  type: TypesUser.DELETE_USER,
  userID,
});

export const actDeleteUserReq = (userID) => (dispatch) => {
  if (confirm("do you want delete user")) {//eslint-disable-line
    return callApi(`user/delete-user/${userID}`, 'DELETE', null)
      .then(() => {
        dispatch(actDeleteUser(userID));
      });
  }
};

export const actGetUserByID = (user) => ({
  type: TypesUser.GET_USER_BY_ID,
  user,
});

export const actGetTourByIDReq = (userID) => (dispatch) => callApi(`user/get-userID/${userID}`, 'GET', null)
  .then((res) => {
    dispatch(actGetUserByID(res.data));
  });

export const actUpdateUser = (user) => ({
  type: TypesUser.UPDATE_USER,
  user,
});

export const actUpdateUserReq = (user) => (dispatch) => callApi(`user/update-user/${user._id}`, 'PUT', user)
  .then((res) => {
    dispatch(actUpdateUser(res.data));
  });
