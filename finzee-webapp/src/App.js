// import { Route, Link } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TransactionContextProvider } from "./contexts/TransactionContext.js";
import { Button } from "@material-ui/core";
import { TransactionsPage } from "./pages/TransactionsPage.js";
import { HubPage } from "./pages/HubPage.js";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Drawer anchor="left" variant="permanent">
          <Grid container direction="column">
            <Grid item>
              <Button color="primary" href="/transactions">
                Transactions
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" href="/hub">
                Finzee Hub
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary">Resources</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Settings</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Help</Button>
            </Grid>
          </Grid>
        </Drawer>
        <TransactionContextProvider>
          <Switch>
            <Route exact path="/transactions">
              <TransactionsPage></TransactionsPage>
            </Route>
            <Route exact path="/hub">
              <HubPage></HubPage>
            </Route>
          </Switch>
        </TransactionContextProvider>
      </Router>
    </div>
  );
}

export default App;
