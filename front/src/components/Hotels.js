import { Hotel } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";

const Hotels = () => {
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
        "X-RapidAPI-Key": "021a30fb30msh61df5bb1c7d8e20p12fb33jsnabd1da524add",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
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
  var country = new Array();
  useEffect(() => {
    console.log("helo");
    if (!isDone) {
      console.log(hotelData);
      getHotels(loc);
    }
  }, []);
  return (
    <Container
      sx={{
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        left: "15%",
        top: "180%",
        zIndex: "-2",
        minWidth: "80%",
      }}
    >
      <Typography variant="h2">Hotels</Typography>
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: "80%",
          marginLeft: "0%",
          minHeight: "25%",
          border: "2px solid black",
          borderRadius: "1em",
          padding: "0.2em",
          marginBottom: "5%",
        }}
      >
        <Box
          id="picture"
          sx={{
            backgroundImage: `url("${
              hotelData.data
                ? hotelData.data[0].photo.images.original.url
                : null
            }")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "21.1%",
            borderRadius: "1em",
          }}
        ></Box>
        <Container
          disableGutters
          id="textMain"
          sx={{
            width: "35vw",
            marginLeft: "2%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={"1.5vw"}>
            <b>
              {hotelData.data
                ? hotelData.data[0].name
                : "Hotelli nimi lalalala"}
            </b>{" "}
            ** {hotelData.data ? hotelData.data[0].hotel_class : "Stars"} **
            <br />
          </Typography>

          <Typography variant="p">
            <u>
              {hotelData.data
                ? hotelData.data[0].location_string
                : "LocationName"}
            </u>{" "}
            **
            <u> OpenMap</u> **{" "}
            {hotelData.data
              ? Math.round(hotelData.data[0].distance * 100) / 100
              : "distance"}
            km from city center
            <br></br>
            <br></br>
            <br></br>
            {hotelData.data ? hotelData.data[0].ranking : "LocationDetails"}.
            Price level:{" "}
            {hotelData.data ? hotelData.data[0].price_level : "LocationDetails"}
            /$$$ .{" "}
            {hotelData.data
              ? hotelData.data[0].open_now_text
              : "LocationDetails"}
            !
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "22%",
            minHeight: "20%",
            paddingTop: "1%",
            textAlign: "right",
          }}
        >
          <Typography variant="p">
            Rating: <></>
            {hotelData.data ? hotelData.data[0].rating : " Rating"}/5<br></br>
            {hotelData.data
              ? hotelData.data[0].num_reviews
              : "ratingAmount"}{" "}
            reviews
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography>
            Average price per night: <br />
            {hotelData.data ? hotelData.data[0].price : null}
          </Typography>
        </Container>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: "80%",
          marginLeft: "0%",
          minHeight: "25%",
          border: "2px solid black",
          borderRadius: "1em",
          padding: "0.2em",
          marginBottom: "5%",
        }}
      >
        <Box
          id="picture"
          sx={{
            backgroundImage: `url("${
              hotelData.data
                ? hotelData.data[1].photo.images.original.url
                : null
            }")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "21.1%",
            borderRadius: "1em",
          }}
        ></Box>
        <Container
          disableGutters
          id="textMain"
          sx={{
            width: "35vw",
            marginLeft: "2%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={"1.5vw"}>
            <b>
              {hotelData.data
                ? hotelData.data[1].name
                : "Hotelli nimi lalalala"}
            </b>{" "}
            ** {hotelData.data ? hotelData.data[1].hotel_class : "Stars"} **
            <br />
          </Typography>

          <Typography variant="p">
            <u>
              {hotelData.data
                ? hotelData.data[1].location_string
                : "LocationName"}
            </u>{" "}
            **
            <u> OpenMap</u> **{" "}
            {hotelData.data
              ? Math.round(hotelData.data[1].distance * 100) / 100
              : "distance"}
            km from city center
            <br></br>
            <br></br>
            <br></br>
            {hotelData.data ? hotelData.data[1].ranking : "LocationDetails"}.
            Price level:{" "}
            {hotelData.data ? hotelData.data[1].price_level : "LocationDetails"}
            /$$$ .{" "}
            {hotelData.data
              ? hotelData.data[1].open_now_text
              : "LocationDetails"}
            !
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "22%",
            minHeight: "20%",
            paddingTop: "1%",
            textAlign: "right",
          }}
        >
          <Typography variant="p">
            Rating: <></>
            {hotelData.data ? hotelData.data[1].rating : " Rating"}/5<br></br>
            {hotelData.data
              ? hotelData.data[1].num_reviews
              : "ratingAmount"}{" "}
            reviews
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography>
            Average price per night: <br />
            {hotelData.data ? hotelData.data[1].price : null}
          </Typography>
        </Container>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: "80%",
          marginLeft: "0%",
          minHeight: "25%",
          border: "2px solid black",
          borderRadius: "1em",
          padding: "0.2em",
          marginBottom: "5%",
        }}
      >
        <Box
          id="picture"
          sx={{
            backgroundImage: `url("${
              hotelData.data
                ? hotelData.data[2].photo.images.original.url
                : null
            }")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "21.1%",
            borderRadius: "1em",
          }}
        ></Box>
        <Container
          disableGutters
          id="textMain"
          sx={{
            width: "35vw",
            marginLeft: "2%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={"1.5vw"}>
            <b>
              {hotelData.data
                ? hotelData.data[2].name
                : "Hotelli nimi lalalala"}
            </b>{" "}
            ** {hotelData.data ? hotelData.data[2].hotel_class : "Stars"} **
            <br />
          </Typography>

          <Typography variant="p">
            <u>
              {hotelData.data
                ? hotelData.data[2].location_string
                : "LocationName"}
            </u>{" "}
            **
            <u> OpenMap</u> **{" "}
            {hotelData.data
              ? Math.round(hotelData.data[2].distance * 100) / 100
              : "distance"}
            km from city center
            <br></br>
            <br></br>
            <br></br>
            {hotelData.data ? hotelData.data[2].ranking : "LocationDetails"}.
            Price level:{" "}
            {hotelData.data ? hotelData.data[2].price_level : "LocationDetails"}
            /$$$ .{" "}
            {hotelData.data
              ? hotelData.data[2].open_now_text
              : "LocationDetails"}
            !
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "22%",
            minHeight: "20%",
            paddingTop: "1%",
            textAlign: "right",
          }}
        >
          <Typography variant="p">
            Rating: <></>
            {hotelData.data ? hotelData.data[2].rating : " Rating"}/5<br></br>
            {hotelData.data
              ? hotelData.data[2].num_reviews
              : "ratingAmount"}{" "}
            reviews
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography>
            Average price per night: <br />
            {hotelData.data ? hotelData.data[2].price : null}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};

export default Hotels;
