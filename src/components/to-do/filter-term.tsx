import {
  Avatar,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { Member } from "types";
import { filterByMemberId } from "store/actions";
import { All_Todos } from "constants/index";

export default function FilterTerm() {
  const [memberIdx, setMemberIdx] = useState<number>(0);
  const dispatch = useAppDispatch();

  const memberStore = useAppSelector((state) => state.memberReducer);
  const members = [
    { id: All_Todos, name: "All todos", img: "" },
    ...memberStore.members,
  ];

  const memberAvatarArr = members.map((item) => (
    <Box display="flex" flexDirection={"row"} alignItems="center">
      <Avatar sx={{ mr: "1rem" }} alt={`Avatar`} src={item.img} /> - {item.name}
    </Box>
  ));

  const handleMemberSelectChange = (event: SelectChangeEvent) => {
    const index = Number.parseInt(event.target.value);

    setMemberIdx(index);
    dispatch(filterByMemberId(members[index].id));
  };

  return (
    <Grid container width="100%">
      <Grid item xs={8} sm={6}>
        <Typography sx={{ fontSize : "1.4rem", fontWeight: "bold" ,textTransform:'uppercase'}}>
          Filter
        </Typography>
        <Select
          label="Member"
          sx={{
            padding: 0,
            ml: "auto",
            width: "100%",
            color: "ffffff",
            height: "3.45rem",
          }}
          type={"number"}
          onChange={handleMemberSelectChange}
          value={memberIdx.toString()}
          renderValue={(index) =>
            index === "0" ? (
              <>{members[0]?.name}</>
            ) : (
              memberAvatarArr[Number.parseInt(index)]
            )
          }
        >
          {members.map((member: Member, index: number) =>
            index === 0 ? (
              <MenuItem key={index} value={index.toString()}>
                <Typography sx={{ textAlign: "center", width: "100%" }}>
                  {members[0]?.name}
                </Typography>
              </MenuItem>
            ) : (
              <MenuItem key={index} value={index.toString()}>
                <Avatar alt={`Avatar`} src={member.img} sx={{ mr: "1rem" }} />
                <div> - {member.name}</div>
              </MenuItem>
            )
          )}
        </Select>
      </Grid>
    </Grid>
  );
}
