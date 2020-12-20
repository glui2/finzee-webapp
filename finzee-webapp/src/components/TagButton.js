import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  tagButton: {
    borderRadius: "10em",
  },
}));

const TagButton = (props) => {
  const classes = useStyles();
  var buttonLabel = props.label;
  console.log(buttonLabel);
  return (
    <Button variant="contained" color="primary" className={classes.tagButton}>
      {buttonLabel}
    </Button>
  );
};

export default TagButton;
