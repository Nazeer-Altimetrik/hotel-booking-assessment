import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { RoomDetailsType } from "../types/RoomDetails";
import { Link } from "react-router-dom";

type RoomDetailsProps = {
  roomDetails: RoomDetailsType;
};

const RoomDetails: React.FC<RoomDetailsProps> = ({ roomDetails }) => {

  return (
    <Grid container spacing={2} alignItems="center">
      {roomDetails?.roomInfo &&
        roomDetails.roomInfo.map((roomDetails) => (
          <Grid
            container
            item
            xs={12}
            sx={{ border: "2px solid white", pb: 2 }}
            key={roomDetails.roomId}
          >
            <Grid item xs={12}>
              <Typography variant="h4">{roomDetails.title}</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              {roomDetails.roomFacililites.map((facility) => (
                <Typography key={facility.id} variant="h6">
                  {facility.title}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={3}>
              {`Price per night: ${Number(roomDetails.price.perRoom)}`}
            </Grid>
            <Grid item xs={3}>
              <Link to={"/booked-hotels"}>
                <Button>Book</Button>
              </Link>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default RoomDetails;
