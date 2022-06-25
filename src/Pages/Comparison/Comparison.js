import ChipComponent from "./ChipComponent";
import { Container } from "@mui/system";
import React from "react";
import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import FaceIcon from "@mui/icons-material/Face";
import ComparisonTable from "./ComparisonTable";
import classes from "./Comparison.module.css";

import { privacyLawData } from "../../utilities/privacyLawData";

export default function Compare() {
  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { thailandSelected } = useSelector((state) => state.selectThailand);
  const { cambodiaSelected } = useSelector((state) => state.selectCambodia);
  const { indonesiaSelected } = useSelector((state) => state.selectIndonesia);

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(setNavValue(2));
  }

  return (
    <Container>
      <h3 className={classes.header}>
        Please select the country you wish to compare
      </h3>
      <div className={classes.chip}>
        <ChipComponent />
      </div>
      <div className={classes.table}>
        {privacyLawData.map((data) => (
          <ComparisonTable
            key={data.id}
            id={data.id}
            code={data.code}
            question={data.question}
            summary={data.summary}
            singapore={singaporeSelected ? data.singapore : ""}
            malaysia={malaysiaSelected ? data.malaysia : ""}
            thailand={thailandSelected ? data.thailand : ""}
            cambodia={cambodiaSelected ? data.cambodia : ""}
            indonesia={indonesiaSelected ? data.indonesia : ""}
          />
        ))}
      </div>

      <div className={classes.footer}>
        <span>
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
