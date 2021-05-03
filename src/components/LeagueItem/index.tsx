import * as React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.light,
    minWidth: "20rem",
    maxWidth: "20rem",
    height: "7.394rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    cursor: "pointer",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      minWidth: "10rem",
      width: "10rem",
      height: "5rem",
      flexDirection: "column",
    },
    "&:hover": {
      boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
    },
  },
  title: {
    color: theme.palette.background.default,
    textAlign: "center",
    padding: "0 0.5rem 0 0.5rem",
    overflow: "hidden",
  },
  logo: {
    maxWidth: "60%",
    padding: "0.5rem",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
}));

interface IItemProps {
  text: string;
  logo: string;
  id: string;
}

const LeagueItem: React.FC<IItemProps> = ({ text, logo, id }) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const handleGetLeague = (id: string) => {
    history.push(`/league/${id}`);
  };

  const getTextVariant = () => {
    if (matches) return "body1";
    if (!matches) return "h6";
  };

  return (
    <Slide in={true} timeout={500} direction="left">
      <Box
        data-testid="card-test"
        className={classes.box}
        onClick={() => handleGetLeague(id)}
      >
        <React.Fragment>
          {logo && <img src={logo} alt="logo" className={classes.logo} />}
          {!logo && (
            <Typography variant={getTextVariant()} className={classes.title}>
              {text}
            </Typography>
          )}
        </React.Fragment>
      </Box>
    </Slide>
  );
};

export default LeagueItem;
