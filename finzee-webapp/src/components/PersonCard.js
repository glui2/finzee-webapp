import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";

const PersonCard = (props) => {
  var name = props.name;
  var job = props.job;
  var experience = props.experience;
  var specialty = props.specialty;
  var certificate = props.certificate;

  return (
    <Box borderColor="primary.main" border={1} borderRadius={20} m={1} p={3}>
      <Grid container direction="column">
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
          <Button variant="outlined" color="primary" className="hire-button">
            Hire
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonCard;
