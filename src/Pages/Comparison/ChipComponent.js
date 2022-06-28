import React from "react";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSingaporeSelected } from "../../redux/countrySlice/Singapore/selectSingapore";
import { setMalaysiaSelected } from "../../redux/countrySlice/Malaysia/selectMalaysia";
import { setPhilippinesSelected } from "../../redux/countrySlice/Philippines/selectPhilippines";
import classes from "./ChipComponent.module.css";

export default function ChipComponent() {
  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { philippinesSelected } = useSelector(
    (state) => state.selectPhilippines
  );

  const dispatch = useDispatch();

  function singaporeClickHandler() {
    setSingaporeSelected(!singaporeSelected);
    dispatch(setSingaporeSelected(!singaporeSelected));
  }
  function malaysiaClickHandler() {
    dispatch(setMalaysiaSelected(!malaysiaSelected));
  }
  function philippinesClickHandler() {
    dispatch(setPhilippinesSelected(!philippinesSelected));
  }

  return (
    <div className={classes.container}>
      <Chip
        label="Singapore"
        onClick={singaporeClickHandler}
        color={singaporeSelected ? "success" : "default"}
      />
      <Chip
        onClick={malaysiaClickHandler}
        label="Malaysia"
        color={malaysiaSelected ? "success" : "default"}
      />
      <Chip
        onClick={philippinesClickHandler}
        label="Philippines"
        color={philippinesSelected ? "success" : "default"}
      />
    </div>
  );
}
