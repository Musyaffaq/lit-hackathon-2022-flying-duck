import { configureStore } from "@reduxjs/toolkit";
import navTabReducer from "./navTabSlice";
import selectSingapore from "./countrySlice/Singapore/selectSingapore";
import selectMalaysia from "./countrySlice/Malaysia/selectMalaysia";
import selectPhilippines from "./countrySlice/Philippines/selectPhilippines";
import searchedReducer from "./searchedLawSlice";

export const store = configureStore({
  reducer: {
    navTab: navTabReducer,
    searched: searchedReducer,
    selectSingapore: selectSingapore,
    selectMalaysia: selectMalaysia,
    selectPhilippines: selectPhilippines,
  },
});
