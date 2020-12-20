import PersonCard from "../components/PersonCard.js";
import React from "react";
import { Grid } from "@material-ui/core";

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

const Professionals = () => {
  return (
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
  );
};

export default Professionals;
