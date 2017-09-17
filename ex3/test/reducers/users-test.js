import assert from 'assert';
import users from '../../src/reducers/users';

import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILURE,
} from '../../src/actions/users';

const initialState = users();

describe('Users reducer', () => {
  it('initializes state properly', () => {
    assert.deepEqual(initialState, {
      data: null,
      loading: false,
      loaded: false,
      error: null,
    });
  });

  it('updates state properly on USERS_LOAD', () => {
    assert.deepEqual(users(initialState, {
      type: USERS_LOAD,
    }), {
      ...initialState,
      loading: true,
    });
  });

  it('updates state properly on USERS_LOAD_SUCCESS', () => {
    assert.deepEqual(users(initialState, {
      type: USERS_LOAD_SUCCESS,
      data: [
        { name: 'Aaron Aaronson' },
        { name: 'Bob Bobertson' },
        { name: 'Carl Carlson' },
      ],
    }), {
      ...initialState,
      data: [
        { name: 'Carl Carlson' },
        { name: 'Bob Bobertson' },
        { name: 'Aaron Aaronson' },
      ],
      loading: false,
      loaded: true,
    });
  });

  it('updates state properly on USERS_LOAD_FAILURE', () => {
    assert.deepEqual(users(initialState, {
      type: USERS_LOAD_FAILURE,
      error: { message: 'Network hardware is on fire' },
    }), {
      ...initialState,
      error: { message: 'Network hardware is on fire' },
    });
  });
});
