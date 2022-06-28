import ChipComponent from "./ChipComponent";
import { Container } from "@mui/system";
import React from "react";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import FaceIcon from "@mui/icons-material/Face";
import ComparisonTable from "./ComparisonTable";
import classes from "./Comparison.module.css";
import SearchBar from "../../Component/SearchBar/SearchBar";
import "../../App.css";

import { privacyLawData } from "../../utilities/privacyLawData";

export default function Compare() {
  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { philippinesSelected } = useSelector(
    (state) => state.selectPhilippines
  );

  const { searchValue, hasSearch } = useSelector((state) => state.searched);

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(setNavValue(2));
  }

  let lawDataToUse = privacyLawData;
  if (searchValue) {
    lawDataToUse = searchValue;
  }

  return (
    <Container className={classes.container}>
      <div>
        <SearchBar />
      </div>
      <div className={classes.chip}>
        <ChipComponent />
      </div>
      <div className={classes.table}>
        {lawDataToUse.map((data) => (
          <ComparisonTable
            key={data.id}
            id={data.id}
            code={data.code}
            question={data.question}
            summary={data.summary}
            singapore={singaporeSelected ? data.singapore : ""}
            malaysia={malaysiaSelected ? data.malaysia : ""}
            philippines={philippinesSelected ? data.philippines : ""}
          />
        ))}
        {hasSearch && searchValue.length === 0 && (
          <div className={classes["no-results"]}>Sorry, no results found..</div>
        )}
      </div>

      <div className={classes.footer}>
        <span className="font">
          Need futher help? Get in contact with
          <Chip
            icon={<FaceIcon />}
            onClick={clickHandler}
            label="Lawyer"
            color="success"
          />
        </span>
      </div>
    </Container>
  );
}
