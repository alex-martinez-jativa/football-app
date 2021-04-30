import React from "react";
import ContainerBar from "../ContainerBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "1rem",
  },
  arrow: {
    cursor: "pointer",
    color: "#fafafa",
  },
}));

interface IGobackComponent {
  goBack: () => void;
}

const GoBackComponent: React.FC<IGobackComponent> = ({ goBack }) => {
  const classes = useStyles();
  return (
    <>
      <ContainerBar>
        <Grid item xs={12} className={classes.grid}>
          <ArrowBackIosIcon onClick={goBack} className={classes.arrow} />
          <Typography onClick={goBack} className={classes.arrow} variant="h6">
            Go back
          </Typography>
        </Grid>
      </ContainerBar>
    </>
  );
};

export default GoBackComponent;
