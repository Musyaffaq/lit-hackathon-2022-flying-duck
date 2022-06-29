import classes from "./ComparisonTable.module.css";
import * as React from "react";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ComparisonTable(props) {
  const [expanded, setExpanded] = React.useState(false);

  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { philippinesSelected } = useSelector(
    (state) => state.selectPhilippines
  );

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === `panel${props.id}`}
        onChange={handleChange(`panel${props.id}`)}
        square={false}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${props.id}bh-content`}
          id={`panel${props.id}bh-header`}
          sx={{ color: "primary.main" }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {props.code}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "fontWeightLight" }}>
            <span>{props.summary}</span>
          </Typography>
          {singaporeSelected && (
            <>
              <Typography
                className={classes.country}
                style={{
                  fontWeight: "bold",
                  padding: "2rem",
                  textDecoration: "underline",
                }}
              >
                {props.singapore.country}
              </Typography>
              <Typography>
                <span>{props.singapore.info}</span>
              </Typography>
            </>
          )}

          {malaysiaSelected && (
            <>
              <Typography
                className={classes.country}
                style={{
                  fontWeight: "bold",
                  padding: "2rem",
                  textDecoration: "underline",
                }}
              >
                {props.malaysia.country}
              </Typography>
              <Typography>
                <span>{props.malaysia.info}</span>
              </Typography>
            </>
          )}
          {philippinesSelected && (
            <>
              <Typography
                className={classes.country}
                style={{
                  fontWeight: "bold",
                  padding: "2rem",
                  textDecoration: "underline",
                }}
              >
                {props.philippines.country}
              </Typography>
              <Typography>
                <span>{props.philippines.info}</span>
              </Typography>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
