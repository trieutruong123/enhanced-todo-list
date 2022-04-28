import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box, Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { addToDo } from 'store/actions';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event && event.key === 'Enter') {
      dispatch(addToDo(data));
      setData('');
    }
  };

  const handleSubmit = (event) => {
    dispatch(addToDo(data));
    setData('');
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
        <InputBase
          fullWidth
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type todo here..."
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={data}
        />
        <IconButton
          id="submit-button"
          aria-label="submit-button"
          type="button"
          onClick={handleSubmit}
          sx={{ p: '10px' }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
