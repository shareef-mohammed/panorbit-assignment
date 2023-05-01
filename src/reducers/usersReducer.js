import { ADD_USER } from "../actions/actionTypes";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: action.users,
        };
      default:
        return state;
    }
};
