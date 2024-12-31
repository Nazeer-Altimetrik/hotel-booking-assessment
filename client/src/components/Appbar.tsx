import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AltimetrikLogo from "../assets/Logo.png";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ResponsiveAppBar: React.FC = () => {
  const { darkTheme, changeTheme } = useTheme();

  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        sx={{ background: "var(--app-bgcolor)", color: "var(--text-color)" }}
        data-testid="appbar"
      >
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Link to={"/"}>
                <img
                  src={AltimetrikLogo}
                  alt="Logo"
                  style={{ width: "50px", paddingTop: "5px" }}
                />
              </Link>
            </Grid>
            <Grid
              item
              md={10}
              xs={10}
              sx={{ justifyContent: "flex-end", display: "flex" }}
            >
              <Button
                onClick={changeTheme}
                sx={{ transition: "none" }}
                data-testid="theme-change-btn"
              >
                {darkTheme ? (
                  <DarkModeIcon
                    sx={{
                      fill: "black",
                      background: "white",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <LightModeIcon sx={{ fill: "orange" }} />
                )}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
