import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { HotelDetailsType } from "../types/hotelDetails";
import { Chip, Stack } from "@mui/material";

const StyledCardMedia = styled(CardMedia)(() => ({
  height: 300,
  position: "relative",
  " ::after": {
    content: '""',
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: "10px",
    opacity: "0.7",
    backgroundImage: "linear-gradient(0deg, black 12%, #13131300)",
    minHeight: "100px",
    maxHeight: "200px",
  },
}));

type HotelCardProps = {
  hotelInfo: HotelDetailsType;
};

const HotelCard: React.FC<HotelCardProps> = ({ hotelInfo }) => {
  return (
    <Link to={`/hotel-detail/${hotelInfo.hotelId}`}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "50px",
          borderRadius: "15px",
          backgroundColor: "#0f0f0f",
          color: "white",
        }}
      >
        <StyledCardMedia
          image={hotelInfo.hotelBanner.url}
          title={hotelInfo.basicInfo.hotelName}
          data-testid="hotel-banner-card-img"
        />
        <CardContent
          sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {hotelInfo.basicInfo.hotelName}
          </Typography>

          <Typography variant="h6" sx={{ color: "white" }}>
            {`Starts from : Rs. ${hotelInfo.priceDetails.startsFrom}`}
          </Typography>
          <Stack direction="row" spacing={1} >
            {hotelInfo.facilities?.features.map((feature) => (
              <Chip label={feature.title} key={feature.id} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HotelCard;
