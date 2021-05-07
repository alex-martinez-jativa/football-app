import React, { ChangeEvent } from "react";
import { useParams, useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
  },
  tabsGrid: {
    display: "flex",
    justifyContent: "center",
  },
}));

const TeamPage: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <GoBackComponent goBack={handleGoBack} />
      {!loading && (
        <Grid item xs={12} className={classes.container}>
          <Grid item xs={12} className={classes.tabsGrid}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TeamPage;
