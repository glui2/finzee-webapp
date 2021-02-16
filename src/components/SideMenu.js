import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import FinzeeLogo from "../images/FinzeeLogo.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProfilePicture from "./ProfilePicture.js";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    height: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F8F6FF",
    height: "100%",
  },
  profilePicture: {
    margin: "5%",
  },
  container: {
    height: "100%",
  },
  finzeeLogo: {
    margin: "auto",
  },
}));

const SideMenu = () => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        spacing={8}
        className={classes.container}
      >
        <Grid item className={classes.profilePicture}>
          <ProfilePicture name="Billie"></ProfilePicture>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Button color="primary" href="/">
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
        </Grid>
        <Grid item className={classes.finzeeLogo}>
          <img src={FinzeeLogo}></img>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SideMenu;
