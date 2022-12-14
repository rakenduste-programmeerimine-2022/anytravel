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

const PlanTrip = () => {
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
        <Typography variant="h2">
          <u>Create a trip</u>
        </Typography>
        <Container></Container>
        <br></br>
        <Typography variant="h4">
          First off, what will we call this trip: <br></br>
          <br></br>
          <TextField helperText="Trip name"></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          Next, where will you be going [City/Country]: <br></br>
          <br></br>
          <TextField helperText="Location"></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          Let's add a date when your trip will start: <br></br>
          <br></br>
          <TextField
            id="outlined-required"
            helperText="Start Date"
            type="date"
          ></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          And when it will end: <br></br>
          <br></br>
          <TextField helperText="End Date" type="date"></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          Any notes for the trip: <br></br>
          <br></br>
          <TextField helperText="Notes"></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          And lastly, let's create a plan! Describe what you'll be doing :
          <br></br>
          <br></br>
          <TextField helperText="Plan"></TextField>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Button
          variant="contained"
          color="success"
          sx={{
            fontSize: "1em",
            padding: "none",
            marginTop: "8%",
            width: "27%",
            height: "3%",
          }}
        >
          Create trip
        </Button>
      </Container>
    </Container>
  );
};

export default PlanTrip;
