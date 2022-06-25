import { createSlice } from "@reduxjs/toolkit";

export const navTabSlice = createSlice({
  name: "navTab",
  initialState: { value: 0 },
  reducers: {
    setNavValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNavValue } = navTabSlice.actions;

export default navTabSlice.reducer;
