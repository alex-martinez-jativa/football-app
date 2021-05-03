import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
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
}));

interface ITeamsComponent {
  leagueId: string;
  leagueName: string;
}

const TeamsComponent: React.FC<ITeamsComponent> = ({
  leagueId,
  leagueName,
}) => {
  const classes = useStyles();
  const { teams, error, loading }: any = useSelector<ITeamsInitialState | any>(
    (state: ITeamsInitialState) => {
      return state.teams;
    }
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTeamsAction(leagueId));
  }, [leagueId, dispatch]);

  return (
    <Grid item xs={12}>
      <Title title={`Teams in ${leagueName}`} />
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

export default TeamsComponent;
