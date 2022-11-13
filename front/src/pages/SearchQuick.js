import { TextField, Button, Container } from "@mui/material";
import React from "react";
import Layout from "./Layout.js";

const SearchQuick = () => {
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
        sx={{
          position: "absolute",
          display: "absolute",
          marginLeft: "400px",
          marginTop: "250px",
          width: "1500px",
        }}
      >
        <TextField
          multiline={true}
          rows={1}
          id="outlined-basic"
          label="Search a location, any location!"
          variant="outlined"
          color="secondary"
          sx={{
            width: "500px",
            height: "100px",
          }}
        ></TextField>
      </Container>
    </Container>
  );
};

export default SearchQuick;
