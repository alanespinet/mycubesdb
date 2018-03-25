import { createStore } from 'redux';
import cubesReducer from '../reducers/cubesReducer';


const store = createStore( cubesReducer );
export default store;
