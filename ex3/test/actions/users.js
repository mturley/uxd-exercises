import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import assert from 'assert';
import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAILURE,
  loadUsers,
} from '../../src/actions/users';

const mockStore = configureMockStore([thunk]);
const fakeUsers = [
  {
    id: 1,
    name: 'Aaron Aaronson',
  }, {
    id: 2,
    name: 'Bob Bobertson',
  }, {
    id: 3,
    name: 'Carl Carlson',
  },
];

describe('Users action creator', () => {
  it('dispatches correct actions sequence on successful loadUsers call', () => {
    fetchMock.reset();
    fetchMock.get('*', fakeUsers);
    const store = mockStore({});
    const promise = store.dispatch(loadUsers()).then(() => {
      assert.deepEqual(store.getActions(), [
        { type: USERS_LOAD },
        { type: USERS_LOAD_SUCCESS, data: fakeUsers },
      ]);
    });
    fetchMock.restore();
    return promise;
  });

  it('dispatches correct actions sequence on failed loadUsers call', () => {
    fetchMock.get('*', {
      body: { error: 'Oh no!' },
      status: 500,
    });
    const store = mockStore({});
    const promise = store.dispatch(loadUsers()).then(() => {
      assert.deepEqual(store.getActions(), [
        { type: USERS_LOAD },
        { type: USERS_LOAD_FAILURE, error: { error: 'Oh no!' } },
      ]);
    });
    fetchMock.restore();
    return promise;
  });
});
