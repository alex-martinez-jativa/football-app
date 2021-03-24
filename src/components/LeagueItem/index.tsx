import * as React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.dark,
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
      minWidth: "90%",
      maxWidth: "90%",
    },
    "&:hover": {
      boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
    },
  },
  title: {
    marginLeft: "0.5rem",
    color: theme.palette.background.default,
  },
  logo: {
    maxWidth: "25%",
    marginRight: "0.5rem;",
    backgroundColor: theme.palette.primary.main,
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

const LeagueItem: React.FC<IItemProps> = ({ text, logo }) => {
  const classes = useStyles();
  return (
    <Slide in={true} timeout={500} direction="left">
      <Box className={classes.box}>
        <React.Fragment>
          <Typography variant="h6" className={classes.title}>
            {text}
          </Typography>
          {logo && <img src={logo} alt="logo" className={classes.logo} />}
        </React.Fragment>
      </Box>
    </Slide>
  );
};

export default LeagueItem;