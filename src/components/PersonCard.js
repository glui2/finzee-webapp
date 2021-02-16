import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import React from "react";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    width: "80%",
  },
  profilePicture: {
    fontSize: "50px",
  },
  container: {
    height: "100%",
  },
}));

const PersonCard = (props) => {
  const classes = useStyles();
  var name = props.name;
  var job = props.job;
  var experience = props.experience;
  var specialty = props.specialty;
  var certificate = props.certificate;

  return (
    <Box
      borderColor="primary.main"
      width="250px"
      height="250px"
      border={1}
      borderRadius={20}
      m={1}
      p={3}
    >
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.container}
      >
        <Grid item>
          <AccountCircleOutlinedIcon
            color="primary"
            fontSize="large"
            className={classes.profilePicture}
          ></AccountCircleOutlinedIcon>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="primary">
            <strong>{name}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="primary">
            {job}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2"> Experience: {experience}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">Specialised in: {specialty}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{certificate}</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" className={classes.button}>
            Book
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonCard;
