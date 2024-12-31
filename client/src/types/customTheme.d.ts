import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      variables: Record<string, string>;
    };
  }
  interface ThemeOptions {
    custom?: {
      variables?: Record<string, string>;
    };
  }
}
