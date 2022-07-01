import React from "react";
import NavTab from "./NavTab";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Header.css";
import { useDispatch } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import privacyImage from "../../assets/img/privacy.png"

export default function Header() {
  const dispatch = useDispatch();

  function onClickHandler() {
    dispatch(setNavValue(0));
  }

  return (
    <div className="container">
      <div className="heading-left">
        <span className="logoGroup" onClick={onClickHandler}>
          <img className="logo" src={privacyImage}/>
          <h2 className="name">Privacy Law</h2>
        </span>
      </div>
      <div className="nav">
        <NavTab />
      </div>
    </div>
  );
}
