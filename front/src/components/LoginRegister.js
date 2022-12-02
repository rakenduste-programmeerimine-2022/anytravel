import React, { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
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

const LOGIN_URL = "http://localhost:8080/user/loginAuth";

const LoginRegister = () => {
  const { setAuth } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successLogin, setSuccessLogin] = useState("");

  /*useEffect(() => {
    userRef.current.focus();
  }, []);
*/
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setPwd("");
      setUser("");
      setSuccessLogin(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response");
      } else if (err.response?.status == 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status == 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("login failed");
      }
      errRef.current.focus();
    }
    console.log(user, pwd);
  };

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
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    confirmPw: "",
    birthdate: "1999-01-01",
    country: "",
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
        <FormControl onSubmit={handleLoginSubmit}>
          <DialogTitle>Log in to your account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={user}
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="pwds"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button color="success" onClick={handleLoginSubmit}>
              Log in
            </Button>
            <Button color="error" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </FormControl>
        {successLogin && (
          <Typography
            sx={{
              color: "green",
              marginLeft: "50%",
              transform: "translateX(-45%)",
            }}
          >
            Log in Successful!
          </Typography>
        )}
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
