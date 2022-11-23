import React, { useState } from "react";
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
  Box,
  FormControl,
  FormHelperText,
  Paper,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

const LoginRegister = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const form = {
    firstname: "a",
    lastname: "a",
    email: "a",
    gender: "a",
    password: "a",
    confirmPw: "a",
    birthdate: "1999-01-01",
    country: "a",
  };

  const [formValue, setFormValue] = useState(form);
  const [helperText, setHelperText] = useState("");
  const [success, setSuccess] = useState(false);

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
    if (formValue.password === formValue.confirmPw) {
      console.log(formValue.firstname);
      axios
        .post("http://localhost:8080/user/signup", {
          firstname: formValue.firstname,
          lastname: formValue.lastname,
          email: formValue.email,
          gender: formValue.gender,
          country: formValue.country,
          birthdate: formValue.birthdate,
          password: formValue.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            setHelperText(error.response.data.errors[0].msg);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        });
    } else {
      setHelperText("Passwords do not match! :/");
      console.log("Passwords dont match! :/");
    }
  };

  return (
    <Container
      sx={{
        zIndex: "3",
        position: "fixed",
        display: "absolute",
        top: "5%",
        left: "80%",
        display: "flex",
        width: "20%",
        height: "10%",
        fontSize: "2em",
      }}
    >
      <Button
        onClick={handleClickOpen}
        sx={{
          height: "40%",
          borderBottom: "0.1em solid black",
          fontSize: "55%",
          marginRight: "5%",
          color: "black",
        }}
      >
        Log in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log in to your account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleClose}>
            Log in
          </Button>
          <Button color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        onClick={handleClickOpen2}
        sx={{
          height: "40%",
          borderBottom: "0.1em solid black",
          fontSize: "55%",
          color: "black",
        }}
      >
        Create an account
      </Button>
      <Dialog
        open={open2}
        onClose={handleClose2}
        component="form"
        onSubmit={handleCreate}
      >
        <FormControl>
          <DialogTitle>Create an account</DialogTitle>
          <DialogContent>
            <DialogTitle sx={{ fontSize: "1em" }}>
              Personal information
            </DialogTitle>
            <TextField
              required
              autoFocus
              margin="dense"
              defaultValue={formValue.firstname}
              onChange={(e) => getFormChange(e)}
              id="firstname"
              label="First name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.lastname}
              id="lastname"
              label="Last name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.gender}
              id="gender"
              label="Gender"
              type="text"
              fullWidth
              variant="standard"
            />
            <br></br>
            <br></br>
            <DialogTitle sx={{ fontSize: "1em" }}>
              Login credentials
            </DialogTitle>
            <TextField
              required
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.email}
              id="email"
              label="Email address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.password}
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.confirmPw}
              id="confirmPw"
              label="Password again"
              type="password"
              fullWidth
              variant="standard"
            />
            <br></br>
            <br></br>
            <DialogTitle sx={{ fontSize: "1em" }}>Other</DialogTitle>
            <TextField
              required
              autoFocus
              focused
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.birthdate}
              id="birthdate"
              label="Date of birth"
              type="date"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              autoFocus
              margin="dense"
              onChange={(e) => getFormChange(e)}
              defaultValue={formValue.country}
              id="country"
              label="Country of origin"
              type="text"
              fullWidth
              variant="standard"
            />
            <FormHelperText error>{helperText}</FormHelperText>
          </DialogContent>
          <DialogActions>
            <Button color="success" onClick={handleCreate}>
              Start your journey!
            </Button>
            <Button color="error" onClick={handleClose2}>
              Close
            </Button>
            {success && <Typography>User created!</Typography>}
          </DialogActions>
        </FormControl>
      </Dialog>
      <Outlet />
    </Container>
  );
};

export default LoginRegister;
