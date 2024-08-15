import { createStore } from 'redux';
import quoteReducer from './reducers';

const store = createStore(quoteReducer);

export default store;
