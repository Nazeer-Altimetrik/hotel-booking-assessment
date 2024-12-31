import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const updateDesigns = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  custom: {
    variables: {
      ...(mode === "light"
        ? { "--app-bgcolor": "#fff", "--text-color": grey[900] }
        : { "--app-bgcolor": grey[900], "--text-color": "#fff" }),
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightBold: 700,
  },
});

export default theme;
