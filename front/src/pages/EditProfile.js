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

const EditProfile = () => {
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
          marginTop: "10%",
          top: "10%",
          left: "50%",
          width: "50%",
          height: "70%",
          aspectRatio: "3/1",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "3%",
          borderRadius: "0.5em",
          transform: "translateX(-50%)",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2}></Stack>

        <Avatar
          alt="Kati"
          src="../components/images/raudseltKati.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <h1>Edit profile</h1>
        <Typography fontSize={24} color="black">
          Here you can change information about your profile! <br />
          <br />
        </Typography>
        <TextField
          required
          id="filled-basic"
          label="First name"
          variant="filled"
        />
        <TextField
          required
          id="filled-basic"
          label="Last name"
          variant="filled"
        />
        <TextField required id="filled-basic" label="Gender" variant="filled" />
        <TextField
          optional
          id="filled-basic"
          label="Nickname"
          variant="filled"
        />
        <TextField
          required
          id="filled-basic"
          label="Email address"
          variant="filled"
        />
        <TextField
          required
          id="filled-basic"
          label="Country"
          variant="filled"
        />
        <TextField
          required
          id="filled-basic"
          label="Password"
          variant="filled"
        />
        <TextField
          required
          id="filled-basic"
          label="Password again"
          variant="filled"
        />
        <br></br>
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{
            fontSize: "0.8em",
            marginLeft: "1.2%",
            marginTop: "3%",
          }}
        >
          <p>Confirm</p>
        </Button>
      </Container>
    </Container>
  );
};
export default EditProfile;
