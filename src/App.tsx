import { Provider } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import store from 'store';
import { ToDoForm, ToDoList, HypnosisLoading } from 'components';

function App() {
  return (
    <>
      <Provider store={store}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <HypnosisLoading />
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4>Enhanced Todo List</h4>
            <Grid
              container
              spacing={3}
              sx={{
                pt: 3,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <ToDoForm></ToDoForm>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <ToDoList></ToDoList>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Provider>
    </>
  );
}

export default App;

