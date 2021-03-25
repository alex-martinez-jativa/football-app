import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
  backGrid: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem 0 1rem 0.5rem",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
  },
}));

interface IContainerBar {
  children: React.ReactElement;
}

const ContainerBar: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.backGrid}>
      {children}
    </Grid>
  );
};

export default ContainerBar;
