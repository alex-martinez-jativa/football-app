import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";
import { NO_CARD_IMAGE } from "../../constants";
import GoBackComponent from "../../components/GoBackComponent";
import openExternalSite from "../../utils/open-external-site";
import { useDispatch } from "react-redux";
import getLeagueAction from "../../redux/actions/getLeagueAction";
import Title from "../../components/Title";
import TeamsComponent from "../../components/TeamsComponent";

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
  root: {
    backgroundColor: theme.palette.secondary.light,
    maxWidth: "50rem",
    borderRadius: "1rem",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    minHeight: "140px",
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
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [showTeams, setShowTeams] = React.useState(false);
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

  const handleGoToTeams = () => {
    setShowTeams(true);
  };

  React.useEffect(() => {
    dispatch(getLeagueAction(id));
  }, [dispatch, id]);

  return (
    <>
      <GoBackComponent goBack={handleGoBack} />
      {!showTeams && !loading && league.idLeague && (
        <Fade in timeout={500}>
          <>
            <Title title={league.strLeagueAlternate || league.strLeague} />
            <Grid item xs={12} className={classes.container}>
              <Card className={classes.root} onClick={() => handleGoToTeams()}>
                <CardActionArea>
                  <CardMedia
                    height="140"
                    component="img"
                    image={
                      league.strBanner === null
                        ? NO_CARD_IMAGE
                        : league.strBanner
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
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleGoToTeams()}
                  >
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
                    Save League
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </>
        </Fade>
      )}
      {showTeams && (
        <TeamsComponent
          leagueId={league.idLeague}
          leagueName={league.strLeague}
        />
      )}
    </>
  );
};

export default LeaguePage;
