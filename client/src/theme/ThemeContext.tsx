import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { updateDesigns } from "./theme";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

type ThemeContextType = {
  darkTheme: boolean;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

type CustomThemeProviderProps = {
  children: ReactNode;
};

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkTheme, setDarkTheme] = useState(prefersDarkScheme);

  const theme = useMemo(
    () => createTheme(updateDesigns(darkTheme ? "dark" : "light")),
    [darkTheme]
  );

  useEffect(() => {
    const root = document.documentElement;
    const variables = theme.custom.variables;
    for (let variable in variables) {
      root.style.setProperty(variable, variables[variable]);
    }
  }, [theme]);

  const changeTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, changeTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
