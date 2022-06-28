import React from "react";
import NavTab from "./NavTab";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Header.css";
import { useDispatch } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";

export default function Header() {
  const dispatch = useDispatch();

  function onClickHandler() {
    dispatch(setNavValue(0));
  }

  return (
    <div className="container">
      <div className="heading-left">
        <span className="logo">
          <GavelIcon fontSize="large" />
        </span>
        <h2 onClick={onClickHandler} className="name">
          Flying-ducks
        </h2>
      </div>
      <div className="nav">
        <NavTab />
      </div>
    </div>
  );
}
