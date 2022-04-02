import { createStore } from 'redux';
import reducerContador from './reducers/contador';

const store = createStore(reducerContador);

export default store;
