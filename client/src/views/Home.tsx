import { Box } from "@mui/material";
import HotelsList from "./HotelsList";
import Banner from '../assets/book-hotel-banner.jpg'

const Home = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw",display:'flex',justifyContent:'center' }}>
        <img
          src={Banner}
          alt="banner"
          width={"80%"}
        />
      </Box>

      <HotelsList />
    </>
  );
};

export default Home;
