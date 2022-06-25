import { createSlice } from "@reduxjs/toolkit";

const selectThailand = createSlice({
  name: "selectThailand",
  initialState: { thailandSelected: false },
  reducers: {
    setThailandSelected: (state, action) => {
      state.thailandSelected = action.payload;
    },
  },
});

export const { setThailandSelected } = selectThailand.actions;
export default selectThailand.reducer;
