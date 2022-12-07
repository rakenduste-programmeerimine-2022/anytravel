import { TextField, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Layout from "./Layout.js";

const SearchQuick = () => {
  async function reNavigate() {
    if (searchVal == "") {
      setError(true);
      setLabelText("Please enter a location name!");
    } else {
      window.location.href = "http://localhost:3000/Searchresults?" + searchVal;
    }
  }

  const [searchVal, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [labelText, setLabelText] = useState("Search a location!");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };
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
          display: "grid",
          top: "20vh",
          left: "18vw",
          gridTemplateColumns: "65% 10%",
          columnGap: "1%",
          rowGap: "40%",
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "3%",
          height: "40vh",
          columnCount: "2",
        }}
      >
        <Typography variant="h3">Search a location, any location!</Typography>
        <Container></Container>
        <TextField
          value={searchVal}
          onChange={handleChange}
          id="searchInput"
          label={labelText}
          variant="outlined"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(3, 138, 255, 1)",
            borderRadius: "0.3em",
          }}
        ></TextField>
        <Button variant="contained" onClick={reNavigate}>
          Search
        </Button>
        <Container
          sx={{
            backgroundColor: "rgba(255,255,255,0.5)",
            width: "100vw",
            height: "60vh",
            marginTop: "1%",
            padding: "5%",
            marginLeft: "-3%",
          }}
        >
          <Typography sx={{ fontSize: "1.5vw", textIndent: "1vw" }}>
            <Typography variant="h3">How it works?</Typography>
            By entering a city name, you'll be shown all you need to know to
            make your next trip happen! Take a breather and let us handle your
            information needs!<br></br>
            <br />
            <Typography variant="h3" sx={{ marginBottom: "2vh" }}>
              Showing You everything you need :
            </Typography>
            * Weather right now <br />
            * Overall weather and cimate <br />
            * Cost of living and Commodities <br />
            * Best hotels in the area <br />* Sightseeing attractions and much
            more!
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default SearchQuick;
