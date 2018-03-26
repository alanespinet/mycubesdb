import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cubesReducer from '../reducers/cubesReducer';


const store = createStore( cubesReducer, applyMiddleware(thunk) );
export default store;
