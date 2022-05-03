import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  InputBase,
  IconButton,
  MenuItem,
  TextField,
  Avatar,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { addToDo } from "store/actions";
import { useAppDispatch, useAppSelector } from "hooks";
import { Member } from "types";

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const memberStore = useAppSelector((state) => state.memberReducer);
  const { members } = memberStore;
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [memberId, setMember] = useState<number>(0);

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
      dispatch(addToDo(content, members[memberId].id, date || new Date()));
      setContent("");
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(addToDo(content, members[memberId].id, date || new Date()));
    setContent("");
  };

  const handleDateChange = (newValue: Date | null) => {
    setDate(newValue);
  };

  const handleMemberSelectChange = (event: SelectChangeEvent) => {
    const index = Number.parseInt(event.target.value);
    console.log(members[index]);
    setMember(index);
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
            <DesktopDatePicker
              label="Deadline"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField sx={{ width: "50%", mr: "1rem" }} {...params} />
              )}
            />
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
            value={memberId.toString()}
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
