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
  FormControl,
} from "@mui/material";
import Layout from "./Layout.js";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PlanTrip = () => {
  const [userInformation, setUserInformation] = useState("");

  const usernameGet = async () => {
    const ACC_URL = "http://localhost:8080/user/accountAuth";
    const userInfo = localStorage.getItem("jwt");
    const packedInfo = { token: userInfo };
    console.log(JSON.stringify({ packedInfo }));
    await axios.post(ACC_URL, packedInfo).then((resp) => {
      console.log(resp);
      setUserInformation(resp.data);
    });
  };
  useEffect(() => {
    usernameGet();
  }, []);

  const form = {
    tripname: "",
    start: "",
    end: "",
    hotel: "",
    plan: "",
    userID: "",
  };

  const [formValue, setFormValue] = useState(form);
  const getFormChange = (e) => {
    const { value, id } = e.target;
    const newValue = {
      ...formValue,
      [id]: value,
    };
    setFormValue(newValue);
    console.log(formValue);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(formValue);
    console.log(formValue.firstname);
    axios
      .post("http://localhost:8080/myTrips/createTrip", {
        tripname: formValue.tripname,
        startdate: formValue.start,
        enddate: formValue.end,
        hotel: formValue.hotel,
        plan: formValue.plan,
        id: userInformation.userInfo ? userInformation.userInfo.email : null,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  };
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
        <FormControl onSubmit={handleCreate}>
          <Typography variant="h2">
            <u>Create a trip</u>
          </Typography>
          <Container></Container>
          <br></br>
          <Typography variant="h4">
            First off, what will we call this trip: <br></br>
            <br></br>
            <TextField
              helperText="Trip name"
              id="tripname"
              defaultValue={formValue.tripname}
              onChange={(e) => getFormChange(e)}
            ></TextField>
            <br></br>
            <br></br>
          </Typography>
          <hr></hr>
          <Typography variant="h4">
            Next, where will you be going [City/Country]: <br></br>
            <br></br>
            <TextField
              id="hotel"
              helperText="Location"
              defaultValue={formValue.hotel}
              onChange={(e) => getFormChange(e)}
            ></TextField>
            <br></br>
            <br></br>
          </Typography>
          <hr></hr>
          <Typography variant="h4">
            Let's add a date when your trip will start: <br></br>
            <br></br>
            <TextField
              id="start"
              defaultValue={formValue.start}
              onChange={(e) => getFormChange(e)}
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
            <TextField
              helperText="End Date"
              type="date"
              id="end"
              defaultValue={formValue.end}
              onChange={(e) => getFormChange(e)}
            ></TextField>
            <br></br>
            <br></br>
          </Typography>
          <hr></hr>
          <Typography variant="h4">
            Any notes for the trip: <br></br>
            <br></br>
            <TextField
              id="notes"
              helperText="Notes"
              defaultValue={formValue.notes}
              onChange={(e) => getFormChange(e)}
            ></TextField>
            <br></br>
            <br></br>
          </Typography>
          <hr></hr>
          <Typography variant="h4">
            And lastly, let's create a plan! Describe what you'll be doing :
            <br></br>
            <br></br>
            <TextField
              id="plan"
              helperText="Plan"
              defaultValue={formValue.plan}
              onChange={(e) => getFormChange(e)}
            ></TextField>
            <br></br>
            <br></br>
          </Typography>
          <hr></hr>
          <Button
            onClick={handleCreate}
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
        </FormControl>
      </Container>
    </Container>
  );
};

export default PlanTrip;
