import React, { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { TextField, Box, Popper, Grid } from "@mui/material";

const formatDate = (date: Date | undefined) => {
  if (!date) return "";
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

type DateRangePickerProps = {
  onChangeHandler: (type: "from" | "to", value: Date) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChangeHandler,
}) => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSelect = (selectedRange: DateRange | undefined) => {
    setRange(selectedRange);
    if (selectedRange?.from) {
      onChangeHandler("from", selectedRange.from);
    }
    if (selectedRange?.to) {
      onChangeHandler("to", selectedRange.to);
      setAnchorEl(null);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const formattedFrom = formatDate(range?.from);
  const formattedTo = formatDate(range?.to);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            label="Date Range"
            value={`${formattedFrom} - ${formattedTo}`}
            onClick={handleClick}
            fullWidth
            InputLabelProps={{ shrink: true }}
            placeholder="Select date range"
          />
          <Popper open={open} anchorEl={anchorEl}>
            <Box sx={{ p: 1, bgcolor: "background.paper" }}>
              <DayPicker
                mode="range"
                selected={range}
                onSelect={handleSelect}
                defaultMonth={new Date()}
                fromDate={new Date()}
              />
            </Box>
          </Popper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DateRangePicker;
