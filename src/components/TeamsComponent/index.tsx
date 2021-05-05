import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Fade from "@material-ui/core/Fade";
import Title from "../Title";
import { ITeamsInitialState } from "../../redux/reducers/teamsReducer";
import getTeamsAction from "../../redux/actions/getTeamsAction";
import { useSelector, useDispatch } from "react-redux";
import TeamCard from "../TeamCard";
import { Team } from "../../domain/models/Teams";

const useStyles = makeStyles((theme: Theme) => ({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
  },
  imageBanner: {
    borderRadius: "20px",
    maxWidth: "80%",
    height: "8rem",
  },
}));

interface ITeamsComponent {
  leagueId: string;
  leagueName: string;
  banner: string;
}

const TeamsComponent: React.FC<ITeamsComponent> = ({
  leagueId,
  leagueName,
  banner,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { teams, error, loading }: any = useSelector<ITeamsInitialState | any>(
    (state: ITeamsInitialState) => {
      return state.teams;
    }
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTeamsAction(leagueId));
  }, [leagueId, dispatch]);

  const handleGoToTeamPage = (teamId: string) => {
    history.push(`/team/${teamId}`);
  };

  return (
    <Grid item xs={12}>
      {banner && (
        <Fade in timeout={1000}>
          <Grid item xs={12} className={classes.banner}>
            <img src={banner} alt="banner" className={classes.imageBanner} />
          </Grid>
        </Fade>
      )}
      {!banner && <Title title={`Teams in ${leagueName}`} />}
      <Grid item xs={12} className={classes.itemContainer}>
        {!loading &&
          teams.map((team: Team) => {
            return (
              <TeamCard
                goToTeamPage={() => handleGoToTeamPage(team.idTeam)}
                key={team.idTeam}
                name={team.strTeam}
                image={team.strTeamBadge}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default TeamsComponent;
