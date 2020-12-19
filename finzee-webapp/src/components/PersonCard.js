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
      <Grid container direction="column">
        <Grid item>
          <AccountCircleOutlinedIcon
            color="primary"
            fontSize="large"
            className={classes.profilePicture}
          ></AccountCircleOutlinedIcon>
        </Grid>
        <Grid item>
          <Typography color="primary">
            <strong>{name}</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="primary">{job}</Typography>
        </Grid>
        <Grid item>
          <Typography>Experience: {experience}</Typography>
        </Grid>
        <Grid item>
          <Typography>Specialised in: {specialty}</Typography>
        </Grid>
        <Grid item>
          <Typography>{certificate}</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" className={classes.button}>
            Hire
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonCard;
