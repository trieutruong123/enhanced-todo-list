import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteToDo, getAllTodos, markItemAsCompleted } from 'store/actions';

export default function TodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      dispatch(getAllTodos(res.data));
    };
    fetchData();
  }, []);

  const todoStore = useSelector((state) => state.todoReducer);
  const { todos } = todoStore;

  const handleDeleteTodo = (id) => {
    dispatch(deleteToDo(id));
  };

  const markTodoAsCompleted = (id) => {
    dispatch(markItemAsCompleted(id));
  };
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {typeof todos !== 'undefined' && todos.map !== 0 ? (
        todos.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton
                  onClick={() => handleDeleteTodo(value.id)}
                  edge="end"
                  aria-label="comments"
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.completed}
                    onChange={() => markTodoAsCompleted(value.id)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.title} />
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

const todosData = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
];
