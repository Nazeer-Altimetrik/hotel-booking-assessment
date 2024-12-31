import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type RoomSelectionInfoProps = {
  onChangeHandler: (type: 'noOfRooms', value: number) => void;
  selectionDetails: {
    noOfRooms: number
  };
};

const RoomSelectionInfo: React.FC<RoomSelectionInfoProps> = ({ onChangeHandler, selectionDetails }) => {
  
  const handleChange = (event: SelectChangeEvent) => {
    onChangeHandler('noOfRooms', parseInt(event.target.value, 10));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Room</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectionDetails.noOfRooms.toString()}
          label="Room"
          onChange={handleChange}
        >
          <MenuItem value={"1"}>One</MenuItem>
          <MenuItem value={"2"}>Two</MenuItem>
          <MenuItem value={"3"}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RoomSelectionInfo;
