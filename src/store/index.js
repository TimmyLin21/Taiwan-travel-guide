import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header";
import loadingReducer from "./loading";
import paginationReducer from "./pagination";

const store = configureStore({
  reducer: {
    header: headerReducer,
    loading: loadingReducer,
    pagination: paginationReducer,
  },
});

export default store;
