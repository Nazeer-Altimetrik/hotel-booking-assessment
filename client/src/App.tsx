import ResponsiveAppBar from "./components/Appbar";
import { Route, Routes } from "react-router";
import Home from "./views/Home.tsx";
import CustomThemeProvider from "./theme/ThemeContext.tsx";
import { Box } from "@mui/material";
import HotelDetails from "./views/HotelDetails.tsx";
import BookedHotels from "./views/BookedHotels.tsx";

function App() {
  return (
    <CustomThemeProvider>
      <ResponsiveAppBar />
      <Box
        sx={{
          marginTop: { xs: "145px", md:'85px',lg:'86px' },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-detail/:hotelId" element={<HotelDetails />} />
          <Route path="/booked-hotels" element={<BookedHotels />} />
        </Routes>
      </Box>
    </CustomThemeProvider>
  );
}

export default App;
