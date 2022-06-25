import classes from "./ComparisonTable.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ComparisonTable(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === `panel${props.id}`}
        onChange={handleChange(`panel${props.id}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${props.id}bh-content`}
          id={`panel${props.id}bh-header`}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {props.code}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>{props.summary}</span>
          </Typography>
          <Typography className={classes.country}>
            {props.singapore.country}
          </Typography>
          <Typography>
            <span>{props.singapore.info}</span>
          </Typography>
          <Typography className={classes.country}>
            {props.malaysia.country}
          </Typography>
          <Typography>
            <span>{props.malaysia.info}</span>
          </Typography>
          <Typography className={classes.country}>
            {props.thailand.country}
          </Typography>
          <Typography>
            <span>{props.thailand.info}</span>
          </Typography>
          <Typography className={classes.country}>
            {props.cambodia.country}
          </Typography>
          <Typography>
            <span>{props.cambodia.info}</span>
          </Typography>
          <Typography className={classes.country}>
            {props.indonesia.country}
          </Typography>
          <Typography>
            <span>{props.indonesia.info}</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
