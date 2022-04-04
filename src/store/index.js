import { configureStore } from '@reduxjs/toolkit';
import sliceContador from './reducers/contador';

const store = configureStore({
  reducer: sliceContador.reducer
});

export default store;
