// import { Route, Link } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TransactionContextProvider } from "./contexts/TransactionContext.js";
import { Button } from "@material-ui/core";
import { TransactionsPage } from "./pages/TransactionsPage.js";
import { HubPage } from "./pages/HubPage.js";
import FinzeeLogo from "./images/FinzeeLogo.png";
import "./App.css";
import React from "react";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F8F6FF",
  },
  profilePicture: {
    fontSize: "60px",
    margin: "5%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item>
            <Drawer
              anchor="left"
              variant="permanent"
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <AccountCircleOutlinedIcon
                    color="primary"
                    className={classes.profilePicture}
                  ></AccountCircleOutlinedIcon>
                </Grid>
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
                <Grid item justify="flex-end">
                  <img src={FinzeeLogo}></img>
                </Grid>
              </Grid>
            </Drawer>
          </Grid>
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
        </Grid>
      </Router>
    </div>
  );
}

export default App;
