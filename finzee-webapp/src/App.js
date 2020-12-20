// import { Route, Link } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { TransactionContextProvider } from "./contexts/TransactionContext.js";
import { TransactionsPage } from "./pages/TransactionsPage.js";
import { HubPage } from "./pages/HubPage.js";
import SideMenu from "./components/SideMenu.js";
import "./App.css";
import React from "react";

function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item>
            <SideMenu></SideMenu>
          </Grid>
          <TransactionContextProvider>
            <Switch>
              <Route exact path="/">
                <TransactionsPage></TransactionsPage>
              </Route>
              <Route exact path="/hub">
                <HubPage></HubPage>
              </Route>
            </Switch>
          </TransactionContextProvider>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
