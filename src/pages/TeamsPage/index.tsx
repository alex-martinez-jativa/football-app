import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import GoBackComponent from "../../components/GoBackComponent";
import { ITeamsInitialState } from "../../redux/reducers/teamsReducer";
import getTeamsAction from "../../redux/actions/getTeamsAction";
import { useSelector, useDispatch } from "react-redux";
import TeamCard from "../../components/TeamCard";
import { Team } from "../../domain/models/Teams";

const useStyles = makeStyles((theme: Theme) => ({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

type ParamsProps = {
  leagueId: string;
};

const TeamsPage: React.FC = () => {
  const classes = useStyles();
  const { leagueId } = useParams<ParamsProps>();
  const history = useHistory();

  const { teams, error, loading }: any = useSelector<ITeamsInitialState | any>(
    (state: ITeamsInitialState) => {
      return state.teams;
    }
  );

  const dispatch = useDispatch();

  const hanleGoBack = () => {
    history.goBack();
  };

  React.useEffect(() => {
    dispatch(getTeamsAction(leagueId));
  }, [leagueId, dispatch]);

  return (
    <Grid item xs={12}>
      <GoBackComponent goBack={hanleGoBack} />
      <Grid item xs={12} className={classes.itemContainer}>
        {!loading &&
          teams.map((team: Team) => {
            return (
              <TeamCard
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

export default TeamsPage;
