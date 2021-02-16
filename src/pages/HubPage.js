import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Professionals from "../components/Professionals";
import Consultations from "../components/Consultations";

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
        <Grid item>
          {selectedTab == 0 ? (
            <Professionals></Professionals>
          ) : (
            <Consultations></Consultations>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export { HubPage };
