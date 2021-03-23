import * as React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.light,
    minWidth: "35rem",
    maxWidth: "35rem",
    minHeight: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    cursor: "pointer",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20rem",
      minWidth: "20rem",
    },
  },
  title: {
    marginLeft: "0.5rem",
  },
  logo: {
    maxWidth: "25%",
    marginRight: "0.5rem;",
    backgroundColor: theme.palette.primary.dark,
    padding: "0.5rem",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40%",
    },
  },
}));

interface IItemProps {
  text: string;
  logo: string;
}

const Item: React.FC<IItemProps> = ({ text, logo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Fade in={true} timeout={500}>
        <React.Fragment>
          <Typography className={classes.title}>{text}</Typography>
          {logo && <img src={logo} alt="logo" className={classes.logo} />}
        </React.Fragment>
      </Fade>
    </Box>
  );
};

export default Item;
