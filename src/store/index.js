import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './header';
import loadingReducer from './loading';

const store = configureStore({
  reducer: {header: headerReducer, loading: loadingReducer},
})

export default store;