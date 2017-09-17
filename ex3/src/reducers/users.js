import { USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILURE } from '../actions/users';

const initialState = {
  data: null,
  loading: false,
  loaded: false,
  error: null,
};

const handlers = {

  [USERS_LOAD]: state => ({
    ...state,
    data: null,
    loading: true,
    loaded: false,
    error: null,
  }),

  [USERS_LOAD_SUCCESS]: (state, action) => ({
    ...state,
    data: action.data,
    loading: false,
    loaded: true,
  }),

  [USERS_LOAD_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: { ...action.error },
  }),

};

export default function usersReducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...handler(state, action) };
}
