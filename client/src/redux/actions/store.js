import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const middleware = [];  // Middleware like redux-thunk can be added later

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
