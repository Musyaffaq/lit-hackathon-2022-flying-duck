import { createSlice } from "@reduxjs/toolkit";

const selectSingapore = createSlice({
  name: "selectSingapore",
  initialState: { singaporeSelected: false },
  reducers: {
    setSingaporeSelected: (state, action) => {
      state.singaporeSelected = action.payload;
    },
  },
});

export const { setSingaporeSelected } = selectSingapore.actions;
export default selectSingapore.reducer;
