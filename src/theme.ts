import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#00796b",
  primaryLight: "#48a999",
  primaryDark: "#004c40",
  secondary: "#8d6e63",
  secondaryLight: "#c8e6c9",
  secondaryDark: "#5f4339",
  background: "#ffffff",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },
    /* secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
    }, */
    background: {
      default: colors.background,
    },
  },
  overrides: {
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#b71c1c",
      },
    },
  },
});

export default theme;
