import classes from "./ComparisonTable.module.css";
import * as React from "react";
import { useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

export default function ComparisonTable(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedMoreInfo, setExpandedMoreInfo] = React.useState(false);
  const { singaporeSelected } = useSelector((state) => state.selectSingapore);
  const { malaysiaSelected } = useSelector((state) => state.selectMalaysia);
  const { philippinesSelected } = useSelector((state) => state.selectPhilippines);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMoreInfoChange = (panel) => (event, isExpanded) => {
    setExpandedMoreInfo(isExpanded ? panel : false);
  };
  
  

  return (
    <>
      <Accordion  
        expanded={expanded === `panel${props.id}`}
        onChange={handleChange(`panel${props.id}`)}
        square={false}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls={`panel${props.id}bh-content`}
          id={`panel${props.id}bh-header`}
          sx={{
            backgroundColor: "#06283D",
            // borderBottom: "1px solid #12738E",
            marginBottom: -1,
            color: "#666666",
            borderRadius: "30px 0px 30px 0",
            minHeight: 56,
            "&$expanded": {
              minHeight: 56,
            },
          }}
        >
          <Typography sx={{ width: "33%", flesmhrink: 0, color: "white" }}>
            {props.code}
          </Typography>
          <Typography sx={{ color: "white" }}>{props.question}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#DFF6FF" }}>
          <Typography sx={{ fontWeight: "fontWeightLight" }}>
            <span>{props.summary}</span>
          </Typography>
          <Grid container spacing={2}>
          {singaporeSelected && (
            <Grid item sm={12} md>
                <Accordion
                  expanded={expandedMoreInfo === `panelMoreInfo`}
                  onChange={handleMoreInfoChange(`panelMoreInfo`)}
                  sx={{display:'contents'}}
                >
                  <AccordionSummary>
                  <Typography>
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
                    <span>{props.singapore.info}</span>
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span>
                        {props.singapore.subInfo}
                      </span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

            </Grid>
          )}
          {malaysiaSelected && (
            <Grid item sm={12} md>
              <Accordion
                  expanded={expandedMoreInfo === `panelMoreInfo`}
                  onChange={handleMoreInfoChange(`panelMoreInfo`)}
                  sx={{ display: 'contents' }}
                >
              <AccordionSummary>
              <Typography>
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
                <span>{props.malaysia.info}</span>
              </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span>
                        {props.malaysia.subInfo}
                      </span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>
          )}
          {philippinesSelected && (
            <Grid item sm={12} md>
                <Accordion
                  expanded={expandedMoreInfo === `panelMoreInfo`}
                  onChange={handleMoreInfoChange(`panelMoreInfo`)}
                  sx={{ display: 'contents' }}
                >
                  <AccordionSummary>
                    <Typography>
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
                      <span>{props.philippines.info}</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <span>
                        {props.philippines.subInfo}
                      </span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>
          )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
