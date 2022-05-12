import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    menuIsShow: false,
    optionsIsShow: false,
    selectedCity: undefined,
    enteredKeyword: "",
    selectedTheme: undefined,
  },
  reducers: {
    menuToggle(state) {
      state.menuIsShow = !state.menuIsShow;
    },
    hideMenu(state) {
      state.menuIsShow = false;
    },
    showMenu(state) {
      state.menuIsShow = true;
    },
    optionToggle(state) {
      state.optionsIsShow = !state.optionsIsShow;
    },
    changeCity(state, action) {
      state.selectedCity = action.payload.city;
    },
    setEnteredKeyword(state, action) {
      state.enteredKeyword = action.payload.keyword;
    },
    changeTheme(state, action) {
      state.selectedTheme = action.payload.theme;
    }
  }
})

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;