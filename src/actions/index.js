import { SET_USERS, FILTER_USERS, API_ERROR } from "./types";

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error, // string with error message from api
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users, // array of fetched non-normalized users
  };
};

export const filterUsers = (criteria) => {
  return {
    type: FILTER_USERS,
    payload: criteria, // object with filter criteria
  };
};
