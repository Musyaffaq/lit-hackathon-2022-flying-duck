import { configureStore } from "@reduxjs/toolkit";
import navTabReducer from "./navTabSlice";
import selectSingapore from "./countrySlice/Singapore/selectSingapore";
import selectMalaysia from "./countrySlice/Malaysia/selectMalaysia";
import selectThailand from "./countrySlice/Thailand/selectThailand";
import selectCambodia from "./countrySlice/Cambodia/selectCambodia";
import selectIndonesia from "./countrySlice/Indonesia/selectIndonesia";

export const store = configureStore({
  reducer: {
    navTab: navTabReducer,
    selectSingapore: selectSingapore,
    selectMalaysia: selectMalaysia,
    selectThailand: selectThailand,
    selectCambodia: selectCambodia,
    selectIndonesia: selectIndonesia,
  },
});
