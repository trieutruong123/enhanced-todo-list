import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";
import { getVisibleTodos } from "helpers";
import {
  deleteToDo,
  getAllTodos,
  markItemAsCompleted,
  getAllMembers,
} from "store/actions";
import { useAppDispatch, useAppSelector } from "hooks";

export default function TodoList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAllTodos());
      dispatch(getAllMembers());
    };
    fetchData();
  }, []);

  const todoStore = useAppSelector((state) => state.todoReducer);
  const memberStore = useAppSelector((state) => state.memberReducer);
  const { members } = memberStore;
  const todos = getVisibleTodos(todoStore);

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteToDo(id));
  };

  const markTodoAsCompleted = (id: string) => {
    dispatch(markItemAsCompleted(id));
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {typeof todos !== "undefined" && todos.length !== 0 ? (
        todos.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              sx={{
                backgroundColor: value.isCompleted
                  ? "lightGreen"
                  : value.isOutOfDate
                  ? "orange"
                  : "lightBlue",
                mt: "0.3rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => handleDeleteTodo(value.id)}
                  edge="end"
                  aria-label="comments"
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <DeleteIcon
                    sx={{
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.isCompleted}
                    onChange={() => markTodoAsCompleted(value.id)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={value.title}
                  secondary={format(value.date, `dd/MM/yyyy HH:mm`)}
                />
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar`}
                    src={
                      members.find((item) => item.id === value.assignedMemberId)
                        ?.img
                    }
                  />
                </ListItemAvatar>
              </ListItemButton>
            </ListItem>
          );
        })
      ) : (
        <></>
      )}
    </List>
  );
}
