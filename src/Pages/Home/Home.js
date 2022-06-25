import { Button, Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import classes from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  function onClickHandler() {
    dispatch(setNavValue(1));
  }

  return (
    <div className={classes.container}>
      <Container>
        <h3>Need help with Data privacy laws? Look no further!</h3>
        <p>Click on the button below to get started!</p>
        <Button onClick={onClickHandler} variant="contained">
          Compare Law
        </Button>
      </Container>
    </div>
  );
}
