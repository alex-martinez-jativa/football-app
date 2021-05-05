import React from "react";
import { useParams, useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ITeamsInitialState } from "../../redux/reducers/teamsReducer";
import getTeamAction from "../../redux/actions/getTeamAction";
import GoBackComponent from "../../components/GoBackComponent";
import { NO_TEAM_JERSEY } from "../../constants";

type ParamsType = {
  teamid: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
  },
  badgeGrid: {
    border: "1px solid black",
    width: "10rem",
    display: "flex",
    flexDirection: "column",
  },
  badge: {
    width: "20%",
    marginBottom: "0.5rem",
    alignSelf: "center",
  },
  teamInfo: {
    margin: "2rem auto",
  },
  textItem: {
    display: "flex",
  },
  itemTitle: {
    marginRight: "0.5rem",
  },
  shirtGrid: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  },
  contentGrid: {
    boder: "1px solid red",
  },
  textBold: {
    fontWeight: "bold",
  },
  textCenter: {
    alignSelf: "center",
  },
}));

const TeamPage: React.FC = () => {
  const classes = useStyles();
  const { teamid } = useParams<ParamsType>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, team }: any = useSelector<ITeamsInitialState | any>(
    (state) => state.teams
  );

  React.useEffect(() => {
    dispatch(getTeamAction(teamid));
  }, [dispatch, teamid]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <GoBackComponent goBack={handleGoBack} />
      <Grid item xs={12} className={classes.container}>
        <Grid item xs={4} className={classes.badgeGrid}>
          <img src={team.strTeamBadge} alt="badge" className={classes.badge} />
          <Typography className={classes.textCenter} variant="h5">
            {team.strTeam}
          </Typography>
          <Typography
            className={clsx(classes.textBold, classes.textCenter)}
            variant="subtitle1"
          >
            {team.intFormedYear}
          </Typography>
          <Grid item xs={12} className={classes.teamInfo}>
            <Grid item className={classes.textItem}>
              <Typography
                className={clsx(classes.textBold, classes.itemTitle)}
                variant="subtitle1"
              >
                League:
              </Typography>
              <Typography variant="subtitle1">{team.strLeague}</Typography>
            </Grid>
            <Grid item className={classes.textItem}>
              <Typography
                className={clsx(classes.textBold, classes.itemTitle)}
                variant="subtitle1"
              >
                Stadium:
              </Typography>
              <Typography variant="subtitle1">{team.strStadium}</Typography>
            </Grid>
            <Grid item className={classes.textItem}>
              <Typography
                className={clsx(classes.textBold, classes.itemTitle)}
                variant="subtitle1"
              >
                Location:
              </Typography>
              <Typography variant="subtitle1">
                {team.strStadiumLocation}
              </Typography>
            </Grid>
            <Grid item className={classes.textItem}>
              <Typography
                className={clsx(classes.textBold, classes.itemTitle)}
                variant="subtitle1"
              >
                Country:
              </Typography>
              <Typography variant="subtitle1">{team.strCountry}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.shirtGrid}>
              <Typography className={classes.textBold} variant="subtitle1">
                Jersey:
              </Typography>
              <img
                src={team.strTeamJersey || NO_TEAM_JERSEY}
                alt="shirt"
                className={classes.badge}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.contentGrid}></Grid>
      </Grid>
    </>
  );
};

export default TeamPage;
