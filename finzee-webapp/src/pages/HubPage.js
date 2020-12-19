import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import PersonCard from "../components/PersonCard.js";

var dummyData = [
  {
    name: "Chris Evans",
    job: "Tax Consultant",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Registered Tax Agent",
  },
  {
    name: "Mark Ruffalo",
    job: "Financial Advisor",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Certified Practicing Accountant",
  },
  {
    name: "Scarlett Johansson",
    job: "Tax Consultant",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Registered Tax Agent",
  },
  {
    name: "Chris Evans",
    job: "Tax Consultant",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Registered Tax Agent",
  },
  {
    name: "Mark Ruffalo",
    job: "Financial Advisor",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Certified Practicing Accountant",
  },
  {
    name: "Scarlett Johansson",
    job: "Tax Consultant",
    experience: "5 years",
    specialty: "Financial Debt",
    certificate: "Registered Tax Agent",
  },
];

const HubPage = () => {
  return (
    // const { showClaimableTransactions, showAllTransactions } = context;
    <div className="transactions-page">
      <Grid container direction="column" spacing={5} justify="space-between">
        <Grid item>
          <Typography
            variant="h4"
            align="left"
            color="primary"
            className="heading"
          >
            <strong>Finzee Hub</strong>
          </Typography>
        </Grid>
        <Grid container>
          {dummyData.map((obj) => (
            <Grid item>
              <PersonCard
                name={obj.name}
                job={obj.job}
                experience={obj.experience}
                specialty={obj.specialty}
                certificate={obj.certificate}
              ></PersonCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
export { HubPage };
