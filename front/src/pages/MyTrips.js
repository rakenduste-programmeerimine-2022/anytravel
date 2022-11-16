import { Container, Typography, Button } from "@mui/material";
import Layout from "./Layout.js";

const MyTrips = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "-2%",
        margin: "0",
        padding: "0",
        border: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <Layout></Layout>
      <Container
        sx={{
          position: "relative",
          top: "10%",
          marginTop: "10%",
          left: "50%",
          width: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "3%",
          borderRadius: "0.5em",
          transform: "translateX(-50%)",
        }}
      >
        <h1>My trips page!</h1>
        <Typography fontSize={24} color="black">
          You are not logged in! <br />
          Log in to see, manage and create yor trips!
          <br />
          <b>
            <Button
              variant="contained"
              color="success"
              sx={{
                fontSize: "0.7em",
                padding: "none",
                marginTop: "8%",
                width: "27%",
                height: "3%",
              }}
            >
              Log in!
            </Button>
          </b>
        </Typography>
      </Container>
    </Container>
  );
};

export default MyTrips;
