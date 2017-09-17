import 'whatwg-fetch';

export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
export const USERS_LOAD_FAILURE = 'USERS_LOAD_FAILURE';

export const loadUsers = () => (dispatch) => {
  dispatch({ type: USERS_LOAD });
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json().then(data => dispatch({ type: USERS_LOAD_SUCCESS, data })))
    .catch(err => dispatch({ type: USERS_LOAD_FAILURE, error: err }));
};
