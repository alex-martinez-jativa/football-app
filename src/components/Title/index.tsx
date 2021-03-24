import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) => ({
  titleGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 1rem",
    minHeight: "2rem",
  },
}));

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFontSize = () => {
    const H5 = "h5";
    const H4 = "h4";
    if (matches) return H5;

    if (!matches) return H4;
  };
  return (
    <Grid item xs={12} className={classes.titleGrid}>
      <Fade in={true} timeout={500}>
        <Typography variant={handleFontSize()}>{title}</Typography>
      </Fade>
    </Grid>
  );
};

export default Title;
