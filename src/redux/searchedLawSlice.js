import { createSlice } from "@reduxjs/toolkit";

export const searchedLawData = createSlice({
  name: "searched",
  initialState: { searchValue: "", hasSearch: false },
  reducers: {
    setSearched: (state, action) => {
      state.searchValue = action.payload;
    },
    setHasSearch: (state, action) => {
      state.hasSearch = action.payload;
    },
  },
});

export const { setSearched, setHasSearch } = searchedLawData.actions;

export default searchedLawData.reducer;
