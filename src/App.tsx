import { Provider } from "react-redux";
import { Box, Container, Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import store from "store";
import { Layout, ToDoForm, ToDoList } from "components";
import "react-toastify/dist/ReactToastify.css";
import FilterTerm from "components/to-do/filter-term";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Layout>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "800",
                  fontSize: "2.2rem",
                }}
              >
                Enhanced Todo List
              </h1>
              <Grid
                container
                spacing={3}
                sx={{
                  pt: 3,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <ToDoForm></ToDoForm>
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <FilterTerm></FilterTerm>
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <ToDoList></ToDoList>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
