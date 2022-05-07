import { useState } from "react";
import { Box, Paper, Button, MenuItem, TextField, Avatar } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { addToDo } from "store/actions";
import { useAppDispatch, useAppSelector } from "hooks";

import { Member } from "types";

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const memberStore = useAppSelector((state) => state.memberReducer);
  const { members } = memberStore;
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [memberIdx, setMemberIdx] = useState<number>(0);

  const memberAvatarArr = members.map((item) => (
    <Box display="flex" flexDirection={"row"} alignItems="center">
      <Avatar sx={{}} alt={`Avatar`} src={item.img} /> - {item.name}
    </Box>
  ));

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContent(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event && event.key === "Enter") {
      if (content) {
        dispatch(addToDo(content, members[memberIdx].id, date || new Date()));
        setContent("");
      }
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (content) {
      dispatch(addToDo(content, members[memberIdx].id, date || new Date()));
      setContent("");
    }
  };

  const handleDateChange = (newValue: Date | null) => {
    setDate(newValue);
  };

  const handleMemberSelectChange = (event: SelectChangeEvent) => {
    const index = Number.parseInt(event.target.value);
    setMemberIdx(index);
  };


  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        sx={{
          p: "1.5rem 1rem 1rem 1rem ",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          fullWidth
          placeholder="Type todo here..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={content}
        />
        <Box
          mt="0.8rem"
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="start"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Deadline"
              inputFormat="dd/MM/yyyy HH:mm"
              value={date}
              onChange={handleDateChange}
              renderInput={(props:any) => (
                <TextField sx={{ width: "50%", mr: "1rem" }} {...props} />
              )}
            >
          </DateTimePicker>
          </LocalizationProvider>
          <Box flexGrow="1 1" />
          <Select
            label="Member"
            sx={{
              padding: 0,
              ml: "auto",
              width: "50%",
              color: "ffffff",
              height: "3.45rem",
            }}
            type={"number"}
            onChange={handleMemberSelectChange}
            value={memberIdx.toString()}
            renderValue={(index) => memberAvatarArr[Number.parseInt(index)]}
          >
            {members.map((member: Member, index: number) => (
              <MenuItem key={index} value={index.toString()}>
                <Avatar alt={`Avatar`} src={member.img} /> - {member.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ width: "100%", mt: "0.8rem" }}
          endIcon={
            <SendIcon
              sx={{
                "&:hover": {
                  color: "green",
                },
              }}
            />
          }
        >
          Create
        </Button>
      </Paper>
    </Box>
  );
}
