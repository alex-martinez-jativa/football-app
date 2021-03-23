import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#30475e",
  primaryLight: "#30475e",
  primaryDark: "#222831",
  secondary: "#f05454",
  background: "#dddddd",
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
    background: {
      default: colors.background,
    },
  },
});

export default theme;
