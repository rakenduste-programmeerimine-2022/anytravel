import { Button, Container, TextField } from "@mui/material";
import Layout from "./Layout.js";

const CreateAccount = () => {
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
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          position: "absolute",
          top: "20%",
          marginTop: "10%",
          left: "30%",
          padding: "40px",
          width: "600px",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "10px",
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
      >
        <h1>Create an account</h1>
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
        <Button variant="contained" color="success">
          <p>Confirm</p>
        </Button>
      </Container>
    </Container>
  );
};

export default CreateAccount;
