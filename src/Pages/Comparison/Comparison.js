import ChipComponent from "./ChipComponent";
import { Container } from "@mui/system";
import React from "react";
import { Accordion, Chip, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import FaceIcon from "@mui/icons-material/Face";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  //to split lawDataToUse into 2 lawDataObj under the category Consent or Purpose

  const lawDataObjectConsent = lawDataToUse.map((data) => (
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
  ))

  const lawDataObjectPurpose = lawDataToUse.map((data) => (
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
  ))


  return (
    <Container className={classes.container}>
      <div>
        <SearchBar />
      </div>
      <div className={classes.chip}>
        <ChipComponent />
      </div>
      <div className={classes.table}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // sx={{backgroundColor: "RGBA(0, 0, 0, 0)"}} //y u no work?
          >
          <Typography>Consent</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {lawDataObjectConsent}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          // sx={{backgroundColor: "RGBA(0, 0, 0, 0)"}} //y u no work?
          >
            <Typography>Purpose</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {lawDataObjectPurpose}
          </AccordionDetails>
        </Accordion>
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
