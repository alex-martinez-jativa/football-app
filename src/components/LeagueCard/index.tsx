import * as React from "react";
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
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducers/leaguesReducer";
import { NO_CARD_IMAGE } from "../../constants";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#c8e6c9",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    padding: "0.5rem",
  },
}));

const LeagueCard: React.FC = () => {
  const classes = useStyles();

  const { league }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  debugger;

  return (
    <>
      {league.idLeague && (
        <Grid
          item
          xs={12}
          container
          justify="center"
          style={{ padding: "1rem" }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                height="140"
                component="img"
                image={league.strLogo === null ? NO_CARD_IMAGE : league.strLogo}
                title="league"
                alt="league"
                className={classes.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {league.strLeague}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {league.strDescriptionEN}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default LeagueCard;
