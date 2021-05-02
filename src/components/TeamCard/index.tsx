import * as React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";

type Props = {
  name: string;
  image: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: "20rem",
    minWidth: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    borderRadius: "1rem",
    cursor: "pointer",
    margin: "1rem",
    boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
    textAlign: "center",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "9rem",
      maxWidth: "8rem",
      margin: "0.5rem",
    },
  },
  title: {
    marginBottom: ".5rem",
    marginTop: ".5rem",
    color: theme.palette.background.default,
  },
  image: {
    maxWidth: "100%",
    height: "5.6rem",
    borderRadius: "0 0 1rem 1rem",
  },
}));

const TeamCard: React.FC<Props> = ({ name, image }) => {
  const classes = useStyles();

  return (
    <Slide in={true} direction="left" timeout={500}>
      <Box className={classes.box}>
        <Typography variant="h5" className={classes.title}>
          {name}
        </Typography>
        <img src={image} alt="country-team" className={classes.image} />
      </Box>
    </Slide>
  );
};

export default TeamCard;
