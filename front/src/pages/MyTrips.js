import { Container, Typography, Button } from "@mui/material";
import Layout from "./Layout.js";

const MyTrips = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "-25px",
        margin: "0",
        padding: "0",
        border: "0",
      }}
    >
      <Layout></Layout>
      <Container
        sx={{
          position: "absolute",
          top: "30%",
          marginTop: "10%",
          left: "30%",
          width: "1500px",
        }}
      >
        <h1>My trips page!</h1>
        <Typography fontSize={24}>
          You are not logged in! <br />
          Log in to see, manage and create yor trips!
          <br />
          <b>
            <Button sx={{ fontSize: "1em", padding: "none" }}>Log in!</Button>
          </b>
        </Typography>
      </Container>
    </Container>
  );
};

export default MyTrips;
