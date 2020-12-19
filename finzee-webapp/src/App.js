// import { Route, Link } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TransactionContextProvider } from "./contexts/TransactionContext.js";
import { Button } from "@material-ui/core";
import { TransactionsPage } from "./pages/TransactionsPage.js";
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
                Hub
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" href="/resources">
                Resources
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" href="/help">
                Help
              </Button>
            </Grid>
          </Grid>
        </Drawer>
        <Switch>
          <Route exact path="/transactions">
            <TransactionContextProvider>
              <TransactionsPage></TransactionsPage>
            </TransactionContextProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
