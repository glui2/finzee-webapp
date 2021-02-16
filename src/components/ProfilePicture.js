import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  picture: {
    fontSize: "60px",
  },
  name: {
    fontWeight: "600",
  },
}));

const ProfilePicture = (prop) => {
  const classes = useStyles();
  const name = prop.name;

  return (
    <div>
      <Typography variant="h6" color="primary" className={classes.name}>
        Hi, {name}!
      </Typography>
      <AccountCircleOutlinedIcon
        color="primary"
        className={classes.picture}
      ></AccountCircleOutlinedIcon>
    </div>
  );
};

export default ProfilePicture;
