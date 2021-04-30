import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";
import { NO_CARD_IMAGE } from "../../constants";
import GoBackComponent from "../../components/GoBackComponent";
import openExternalSite from "../../utils/open-external-site";
import { useDispatch } from "react-redux";
import getLeagueAction from "../../redux/actions/getLeagueAction";

type RouteParams = {
  id: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  root: {
    backgroundColor: "#c8e6c9",
    maxWidth: "50rem",
    borderRadius: "1rem",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    padding: "1rem",
    margin: "0 auto",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      opacity: "0.8",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const LeaguePage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();
  const { league, loading }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  const handleGoToWebSite = (site: string) => {
    openExternalSite(site);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  React.useEffect(() => {
    dispatch(getLeagueAction(id));
  }, [dispatch, id]);

  const handleTitleVariant = () => {
    if (matches) {
      return "h5";
    }
    if (!matches) {
      return "h3";
    }
  };

  return (
    <>
      <GoBackComponent goBack={handleGoBack} />
      {league.idLeague && !loading && (
        <Grid item xs={12} className={classes.container}>
          <Typography className={classes.title} variant={handleTitleVariant()}>
            {league.strLeagueAlternate}
          </Typography>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                height="140"
                component="img"
                image={
                  league.strBanner === null ? NO_CARD_IMAGE : league.strBanner
                }
                title="league"
                alt="league"
                className={classes.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {league.strLeague}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="justify"
                >
                  {league.strDescriptionEN}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View Teams
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handleGoToWebSite(league.strWebsite)}
              >
                Go to website
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default LeaguePage;
