import { SET_USERS, FILTER_USERS, API_ERROR } from "../actions/types";
import { normalizeUsers, filterBy } from "../helpers";

const INITIAL_STATE = {
  users: [],
  filteredUsers: [],
  noMatchingResults: false,
  apiError: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      const fetchedUsers = action.payload;
      // convert to more convenient format
      const normalizedUsers = normalizeUsers(fetchedUsers);
      return {
        ...state,
        users: [...normalizedUsers],
      };

    case FILTER_USERS:
      const { name, gender, country, isOver18 } = action.payload;
      const filteredUsers = filterBy(
        state.users,
        name,
        gender,
        country,
        isOver18
      );

      return {
        ...state,
        filteredUsers,
        noMatchingResults: filteredUsers.length === 0 ? true : false,
      };

    case API_ERROR:
      return {
        ...state,
        apiError: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
