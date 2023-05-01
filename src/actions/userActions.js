import { ADD_USER } from "../actions/actionTypes";

const addUser = (users) => {
    return {
      type: ADD_USER,
      users,
    };
};
  
export { addUser };