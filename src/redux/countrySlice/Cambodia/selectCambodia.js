import { createSlice } from "@reduxjs/toolkit";

const selectCambodia = createSlice({
  name: "selectCambodia",
  initialState: { cambodiaSelected: false },
  reducers: {
    setCambodiaSelected: (state, action) => {
      state.cambodiaSelected = action.payload;
    },
  },
});

export const { setCambodiaSelected } = selectCambodia.actions;
export default selectCambodia.reducer;
