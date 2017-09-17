import 'whatwg-fetch';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';

export const loadUsers = () => (dispatch) => {
  dispatch({ type: LOAD_USERS });
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => dispatch({ type: LOAD_USERS_SUCCESS, data: res.body }))
    .catch(err => dispatch({ type: LOAD_USERS_FAILURE, error: err }));
};
