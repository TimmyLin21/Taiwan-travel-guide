import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    status: '',
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload.status
    }
  }
})

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;