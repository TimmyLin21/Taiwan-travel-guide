import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header';

const store = configureStore({
  reducer: {header: headerReducer,},
})

export default store;