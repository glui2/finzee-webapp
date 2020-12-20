import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import PersonCard from "../components/PersonCard.js";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

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

const useStyles = makeStyles((theme) => ({
  heading: {
    verticalAlign: "center",
    marginTop: "30px",
  },
}));

const HubPage = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    // const { showClaimableTransactions, showAllTransactions } = context;
    <div className="transactions-page">
      <Grid container direction="column" spacing={5} justify="space-between">
        <Grid item>
          <Typography
            variant="h4"
            align="left"
            color="primary"
            className={classes.heading}
          >
            <strong>FINZEE Hub</strong>
          </Typography>
        </Grid>
        <Grid item>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              onChange={handleTabChange}
              value={selectedTab}
            >
              <Tab label="Find new professionals" />
              <Tab label="My booked consultations" />
            </Tabs>
          </AppBar>
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
