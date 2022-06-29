import React from "react";
import LawyerCard from "./LawyerCard";
import { lawyersData } from "../../utilities/lawyersData";
import classes from "./Lawyers.module.css";

export default function Lawyers() {
  return (
    <div className={classes.div}>
      <h2 className={classes.title}>Find Lawyers details </h2>
      <div className={classes.container}>
        {lawyersData.map((data) => (
          <div key={data.firm} className={classes.card}>
            <LawyerCard
              firm={data.firm}
              phone={data.phone}
              email={data.email}
              website={data.website}
              img={data.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
