import { createSlice } from "@reduxjs/toolkit";

const selectIndonesia = createSlice({
  name: "selectIndonesia",
  initialState: { indonesiaSelected: false },
  reducers: {
    setIndonesiaSelected: (state, action) => {
      state.indonesiaSelected = action.payload;
    },
  },
});

export const { setIndonesiaSelected } = selectIndonesia.actions;
export default selectIndonesia.reducer;
