import {
  Container,
  Typography,
  Button,
  TextField,
  InputLabel,
} from "@mui/material";
import Layout from "./Layout.js";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import axios from "axios";
import { useState, useEffect } from "react";

const MyTripsLogged = () => {
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
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "3%",
          height: "90vh",
        }}
      >
        <Typography variant="h2">
          <u>My trips</u>
        </Typography>
        <Container></Container>
        <br></br>
        <Typography variant="h4">
          We found no trips associated with your account :/ <br></br>
          <Button
            variant="contained"
            color="success"
            onClick={() => (window.location = "/PlanTrip")}
          >
            Plan one now
          </Button>
          <br></br>
          <br></br>
          <br></br>
        </Typography>
        <hr></hr>
        <Typography variant="h4">
          Going to Italy with friends <br></br>
          <Button variant="contained" color="success">
            View Trip
          </Button>
        </Typography>
      </Container>
    </Container>
  );
};

export default MyTripsLogged;
