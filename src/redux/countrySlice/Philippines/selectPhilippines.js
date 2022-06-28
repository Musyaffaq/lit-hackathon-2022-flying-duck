import { createSlice } from "@reduxjs/toolkit";

const selectPhilippines = createSlice({
  name: "selectPhilippines",
  initialState: { philippinesSelected: false },
  reducers: {
    setPhilippinesSelected: (state, action) => {
      state.philippinesSelected = action.payload;
    },
  },
});

export const { setPhilippinesSelected } = selectPhilippines.actions;
export default selectPhilippines.reducer;
