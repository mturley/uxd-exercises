import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import reducers from './reducers/index';

// add the middlewares
const middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the thunk middleware
middlewares.push(thunk);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) { // eslint-disable-line no-undef
  middleware = compose(middleware, window.devToolsExtension()); // eslint-disable-line no-undef
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
