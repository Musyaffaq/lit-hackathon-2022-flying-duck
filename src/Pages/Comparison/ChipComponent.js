import React from "react";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSingaporeSelected } from "../../redux/countrySlice/Singapore/selectSingapore";
import { setMalaysiaSelected } from "../../redux/countrySlice/Malaysia/selectMalaysia";
import { setThailandSelected } from "../../redux/countrySlice/Thailand/selectThailand";
import { setCambodiaSelected } from "../../redux/countrySlice/Cambodia/selectCambodia";
import { setIndonesiaSelected } from "../../redux/countrySlice/Indonesia/selectIndonesia";

export default function ChipComponent() {
  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { thailandSelected } = useSelector((state) => state.selectThailand);
  const { cambodiaSelected } = useSelector((state) => state.selectCambodia);
  const { indonesiaSelected } = useSelector((state) => state.selectIndonesia);

  const dispatch = useDispatch();

  function singaporeClickHandler() {
    setSingaporeSelected(!singaporeSelected);
    dispatch(setSingaporeSelected(!singaporeSelected));
  }
  function malaysiaClickHandler() {
    dispatch(setMalaysiaSelected(!malaysiaSelected));
  }
  function thailandClickHandler() {
    dispatch(setThailandSelected(!thailandSelected));
  }
  function cambodiaClickHandler() {
    dispatch(setCambodiaSelected(!cambodiaSelected));
  }
  function indonesiaClickHandler() {
    dispatch(setIndonesiaSelected(!indonesiaSelected));
  }

  return (
    <>
      <Chip
        label="Singapore"
        onClick={singaporeClickHandler}
        color={singaporeSelected ? "primary" : "default"}
      />
      <Chip
        onClick={malaysiaClickHandler}
        label="Malaysia"
        color={malaysiaSelected ? "primary" : "default"}
      />
      <Chip
        onClick={thailandClickHandler}
        label="Thailand"
        color={thailandSelected ? "primary" : "default"}
      />
      <Chip
        onClick={cambodiaClickHandler}
        label="Cambodia"
        color={cambodiaSelected ? "primary" : "default"}
      />
      <Chip
        onClick={indonesiaClickHandler}
        label="Indonesia"
        color={indonesiaSelected ? "primary" : "default"}
      />
    </>
  );
}
