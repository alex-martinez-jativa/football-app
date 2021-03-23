import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#30475e",
  primaryLight: "#dddddd",
  primaryDark: "#222831",
  secondary: "#383e56",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },
    secondary: {
      main: colors.secondary,
    },
    /* background: {
      default: colors.background,
    }, */
  },
});

export default theme;
