import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import quoteReducer from './reducers';

const store = createStore(quoteReducer, applyMiddleware(thunk));

export default store;
