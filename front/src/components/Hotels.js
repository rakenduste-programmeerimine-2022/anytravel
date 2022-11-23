import { Hotel } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";

const Hotels = () => {
  var hData = [];
  // inverse geolocation asjad
  var loc = window.location.href.slice(36);
  if (loc == "") {
    loc = "tallinn";
  }

  const [hotelData, setHotelData] = useState({ hotelData: [] });

  function getAll(loc) {
    var x = axios
      .get(
        `https://us1.locationiq.com/v1/search?key=pk.b9cecc7637ae1ffc5ef8b6bca65e3bac&q=${loc}&format=json`
      )
      .then((response) => {
        var lat = response.data[0].lat;
        var lon = response.data[0].lon;
        return lat + " " + lon;
      });
    return x;
  }

  async function getHotels(loc) {
    var locations = (await getAll(loc)).split(" ");
    var lat = locations[0];
    var lon = locations[1];
    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
      params: {
        latitude: `${lat}`,
        longitude: `${lon}`,
        limit: "10",
      },
      headers: {
        "X-RapidAPI-Key": "ece877a954mshf9a21e1f9d4d9bap1eab24jsnf54f64c04361",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        if (response.data.data.length > 0 && !isDone) {
          setHotelData(response.data);
          isDone = true;
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  var isDone = false;
  useEffect(() => {
    if (!isDone) {
      console.log(hotelData);
      //getHotels(loc);
    }
  }, []);
  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "200%",
        height: "50%",
        position: "absolute",
        display: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container
        sx={{
          position: "absolute",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "40%",
          aspectRatio: "1/1",
          color: "black",
          backgroundImage: `url()`,
          marginTop: "10%",
          backgroundColor: "rgb(200, 200, 200)",
        }}
      >
        <Box
          id="picture"
          sx={{
            backgroundColor: "black",
            width: "100%",
            height: "30%",
            backgroundImage: `url(${
              hotelData.data ? hotelData.data[0].photo.images.medium.url : null
            })`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "70%",
            textIndent: "3%",
          }}
        >
          <Typography sx={{ fontSize: "28px", marginBottom: "20%" }}>
            {hotelData.data ? hotelData.data[0].name : "Pealkiri"}
          </Typography>
          <Typography sx={{ fontSize: "18px", marginBottom: "10%" }}>
            {hotelData.data ? hotelData.data[0].name : "asjad"}
          </Typography>
          <Typography sx={{ fontSize: "18px", marginBottom: "10%" }}>
            {hotelData.data ? hotelData.data[0].name : "holder"}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Hotels;
