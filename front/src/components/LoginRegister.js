import * as React from "react";
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
import { Outlet, Link } from "react-router-dom";

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
  return (
    <Container
      sx={{
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
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Create an account</DialogTitle>
        <DialogContent>
          <DialogTitle sx={{ fontSize: "1em" }}>
            Personal information
          </DialogTitle>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="First name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Last name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            optional
            autoFocus
            margin="dense"
            id="name"
            label="Gender"
            type="text"
            fullWidth
            variant="standard"
          />
          <br></br>
          <br></br>
          <DialogTitle sx={{ fontSize: "1em" }}>Login credentials</DialogTitle>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Email address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
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
            id="name"
            label="Date of birth"
            type="date"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Country of origin"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleClose2}>
            Start your journey!
          </Button>
          <Button color="error" onClick={handleClose2}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Outlet />
    </Container>
  );
};

export default LoginRegister;
