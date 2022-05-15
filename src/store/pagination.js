import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    hasMore: true,
  },
  reducers: {
    addPageIndex(state) {
      state.currentPage += 1;
      state.hasMore = true;
    },
    clearPageIndex(state) {
      state.currentPage = 1;
    },
    delHasMore(state) {
      state.hasMore = false;
    }
  }
})

export const paginationActions = paginationSlice.actions;

export default paginationSlice.reducer;