import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import classes from "./LawyerCard.module.css";
import { CardMedia } from "@mui/material";

export default function LawyerCard({ firm, phone, email, website, img }) {
  return (
    <Card
      sx={{
        minWidth: 500,
        backgroundColor: "#535353",
        display: "flex",
        maxWidth: "60%",
      }}
    >
      <div className={classes.img}>
        <CardMedia component="img" image={img} height="200" />
      </div>
      <div className={classes.details}>
        <CardContent>
          <Typography
            sx={{ fontSize: 24, color: "white" }}
            color="text.secondary"
            gutterBottom
          >
            {firm}
          </Typography>

          <Typography sx={{ mb: 1.5, color: "white" }} color="text.secondary">
            Phone: {phone}
          </Typography>
          <Typography sx={{ mb: 1.5, color: "white" }} color="text.secondary">
            Email: {email}
          </Typography>
          <Typography sx={{ mb: 1.5, color: "white" }} color="text.secondary">
            Website: {website}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
