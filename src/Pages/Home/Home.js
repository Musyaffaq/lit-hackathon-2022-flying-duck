import { Button, Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import classes from "./Home.module.css";
import id from "./Home.module.css";
import imgUrl from "../../assets/img/charts-pie-and-bars.svg";

export default function Home() {
  const dispatch = useDispatch();

  function onClickHandler() {
    dispatch(setNavValue(1));
  }

  return (
    <div className={classes.container}>
      <Container style={{ color: "" }}>
        <h3>Need help with Data privacy laws? Look no further!</h3>
        <p>Click on the button below to get started!</p>
        <div className={classes.btn}>
          <Button color="success" onClick={onClickHandler} variant="contained">
            Compare Law
          </Button>
        </div>

        <br />
        <div style={{ justifyContent: "center", display: "flex" }}>
          <img id={id.barsImg} src={imgUrl} />
        </div>
      </Container>
    </div>
  );
}
