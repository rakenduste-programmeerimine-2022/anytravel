import {
  Container,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Layout from "./Layout.js";
import * as React from "react";

const ViewTrip = () => {
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
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "20vh",
          left: "18vw",
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: "3%",
          height: "200%",
        }}
      >
        <Typography variant="h3">
          <u>Here's your created trip to Italy</u>
        </Typography>
        <br />
        <Typography variant="h5">
          <u> Trip name</u>: Just for fun
          <br />
          <u> Location</u>: Italy
          <br />
          <u> Start date</u>: 23-01-2023
          <br />
          <u> End date</u>: 27-01-2023
          <br />
          <u> Notes</u>: "Pls none kill urself"
          <br />
          <u> Plan</u>: no plan, brain empty
        </Typography>
      </Container>
    </Container>
  );
};

export default ViewTrip;
