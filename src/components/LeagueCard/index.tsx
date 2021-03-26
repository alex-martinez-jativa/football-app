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
import openExternalSite from "../../utils/open-external-site";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#c8e6c9",
    width: "50rem",
    minWidth: "50rem",
    borderRadius: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      minWidth: "10rem",
    },
  },
  image: {
    // maxWidth: "50%",
    maxWidth: "100%",
    height: "auto",
    padding: "1rem",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const LeagueCard: React.FC = () => {
  const classes = useStyles();

  const { league }: any = useSelector<IInitialState | any>(
    (state: IInitialState) => state.leagues
  );

  const handleGoToWebSite = (site: string) => {
    openExternalSite(site);
  };

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
                image={
                  league.strBanner === null ? NO_CARD_IMAGE : league.strBanner
                }
                title="league"
                alt="league"
                className={classes.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
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
                Share
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => handleGoToWebSite(league.strWebsite)}
              >
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
