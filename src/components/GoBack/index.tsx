import * as React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  arrow: {
    cursor: "pointer",
    color: "#fafafa",
  },
}));

interface IGoBack {
  handleGoBack: () => void;
}

const GoBack: React.FC<IGoBack> = ({ handleGoBack }) => {
  const classes = useStyles();
  return (
    <>
      <ArrowBackIosIcon onClick={handleGoBack} className={classes.arrow} />
      <Typography onClick={handleGoBack} className={classes.arrow} variant="h6">
        Go back
      </Typography>
    </>
  );
};

export default GoBack;
