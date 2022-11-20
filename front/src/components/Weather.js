import React, { useEffect, useState } from "react";
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
import cloudy from "./images/weatherImages/cloudy.jpg";
import sunny from "./images/weatherImages/sunny.jpg";
import rainy from "./images/weatherImages/rainy.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const Weather = () => {
  function Location() {
    var loc = window.location.href.slice(36);
    console.log(typeof loc);
    if (loc == "") {
      loc = "tallinn";
    }
    return loc;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location()}&appid=895284fb2d2c50a520ea537456963d9c&units=metric`;
  const overcast = "rainy";
  let weatherimage = "";
  console.log(url);
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    var ran = "";
    async function searchLoc() {
      try {
        await axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    if (!ran) {
      searchLoc();
      ran = true;
    } else {
    }
  }, []);

  if (overcast === "cloudy") {
    weatherimage = cloudy;
  } else if (overcast === "sunny") {
    weatherimage = sunny;
  } else if (overcast === "rainy") {
    weatherimage = rainy;
  }
  return (
    <Container
      sx={{
        position: "absolute",
        top: "15%",
        left: "80%",
        width: "15%",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
        borderRadius: "10%",
        backgroundImage: `url(${weatherimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "2px 2px 10px black",
      }}
    >
      <Typography
        sx={{
          marginTop: "25px",
          fontSize: "3vh",
          color: "white",
          textShadow: "0.2vh 0.1vh black",
        }}
      >
        {data.name}
      </Typography>
      <Box>
        {data.main ? (
          <Typography
            sx={{
              fontSize: "6.2vh",
              color: "white",
              textShadow: "0.2vh 0.1vh black",
            }}
          >
            {data.main.temp} °C
          </Typography>
        ) : null}
      </Box>
      <Box>
        {data.main ? (
          <Typography
            sx={{
              fontSize: "2vh",
              color: "white",
              textShadow: "0.2vh 0.1vh black",
            }}
          >
            feels like {data.main.feels_like} °C
          </Typography>
        ) : null}
      </Box>
      <Box>
        {data.main ? (
          <Typography
            sx={{
              fontSize: "2vh",
              color: "white",
              textShadow: "0.2vh 0.1vh black",
            }}
          >
            wind {data.wind.speed} m/s
          </Typography>
        ) : null}
      </Box>
    </Container>
  );
};

export default Weather;
