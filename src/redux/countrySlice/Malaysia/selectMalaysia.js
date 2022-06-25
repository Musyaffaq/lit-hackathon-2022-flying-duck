import { createSlice } from "@reduxjs/toolkit";

const selectMalaysia = createSlice({
  name: "selectMalaysia",
  initialState: { malaysiaSelected: false },
  reducers: {
    setMalaysiaSelected: (state, action) => {
      state.malaysiaSelected = action.payload;
    },
  },
});

export const { setMalaysiaSelected } = selectMalaysia.actions;
export default selectMalaysia.reducer;
