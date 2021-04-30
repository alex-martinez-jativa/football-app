import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GoBackComponent from "../../components/GoBackComponent";

type ParamsProps = {
  leagueId: string;
};

const TeamsPage: React.FC = () => {
  const { leagueId } = useParams<ParamsProps>();
  const history = useHistory();

  const hanleGoBack = () => {
    history.goBack();
  };

  debugger;
  return (
    <Grid item xs={12}>
      <GoBackComponent goBack={hanleGoBack} />
      <Typography>{leagueId}</Typography>
    </Grid>
  );
};

export default TeamsPage;
