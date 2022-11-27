import axios from "axios";
import react, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import restaurant from "./images/tln_resto.jpg";
import publicTransport from "./images/Public-Transport.jpg";

const CountryInfo = () => {
  var loc = window.location.href.slice(36);
  var isDone = false;
  if (loc == "") {
    loc = "tallinn";
  }

  const [CommoditiesData, setCommoditiesData] = useState({
    CommoditiesData: [],
  });

  function getAll(loc) {
    var x = axios
      .get(
        `https://us1.locationiq.com/v1/search?key=pk.b9cecc7637ae1ffc5ef8b6bca65e3bac&q=${loc}&format=json`
      )
      .then((response) => {
        var country =
          response.data[0].display_name.split(",")[
            response.data[0].display_name.split(",").length - 1
          ];
        return country.replace(/ /g, "");
      });
    return x;
  }

  async function GetRequiredData(loc) {
    var country = await getAll(loc);
    const options = {
      method: "GET",
      url: "https://cost-of-living-and-prices.p.rapidapi.com/prices",
      params: { city_name: `${loc}`, country_name: `${country}` },
      headers: {
        "X-RapidAPI-Key": "021a30fb30msh61df5bb1c7d8e20p12fb33jsnabd1da524add",
        "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.prices.length);
        if (response.data.prices.length > 0 && !isDone) {
          setCommoditiesData(response);
          isDone = true;
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    console.log("helo");
    if (!isDone) {
      GetRequiredData(loc);
      console.log(CommoditiesData.data);
    }
  }, []);

  return (
    <Container
      id="generalPrices"
      sx={{
        position: "absolute",
        top: "50%",
        left: "15%",
        minWidth: "80%",
        height: "120%",
        backgroundColor: "rgba(255, 255, 255, 1)",
        zIndex: "-1",
        fontSize: "2.5em",
        display: "grid",
        columnGap: "50px",
        rowGap: "50px",
        gridTemplateColumns: "48% 48%",
        columnCount: "2",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2em",
          position: "absolute",
          textAlign: "center",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        General Cost of Living
      </Typography>
      <Box></Box>
      <Box></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "18px",
          backgroundColor: "rgba(0, 0, 0, 1)",
          justifyContent: "center",
          placeItems: "center",
          boxShadow: "0.1em 0.1em 0.5em black",

          borderRadius: "1em",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "46.2%",
            height: "43.4%",
            backgroundColor: "black",
            zIndex: "1",
            backgroundImage: `url(${restaurant})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            borderRadius: "1em",
          }}
        ></Box>
        <Typography
          variant="h4"
          marginBottom={"80px"}
          sx={{
            color: "white",
            zIndex: "5",
            textShadow: "1px 2px black",
          }}
        >
          <u>Restaurants</u>
        </Typography>
        <Typography
          sx={{ color: "white", zIndex: "5", textShadow: "1px 2px black" }}
        >
          <b>Meal in Inexpensive Restaurant : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[35].usd.avg
            : null}{" "}
          $
          <br />
          <b>Meal for 2 People, Mid-range Restaurant, Three-course : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[34].usd.avg
            : null}{" "}
          $
          <br />
          <b>McMeal at McDonalds or Alternative Combo Meal : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[33].usd.avg
            : null}{" "}
          $
          <br />
          <b>Domestic Beer, 0.5 liter Draught : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[31].usd.avg
            : null}{" "}
          $
          <br />
          <b>Imported Beer, 0.33 liter Bottle : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[32].usd.avg
            : null}{" "}
          $
          <br />
          <b>Cappuccino : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[29].usd.avg
            : null}{" "}
          $
          <br />
          <b>Coca-Cola or other soft drinks, 0.33 liter Bottle : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[30].usd.avg
            : null}{" "}
          $ <br />
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "18px",
          justifyContent: "center",
          placeItems: "center",
          borderRadius: "1em",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "46.2%",
            height: "43.4%",
            backgroundColor: "black",
            zIndex: "1",
            backgroundImage: `url(${publicTransport})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            borderRadius: "1em",
          }}
        ></Box>
        <Typography
          variant="h4"
          paddingBottom={"80px"}
          sx={{ color: "white", zIndex: "5", textShadow: "1px 2px black" }}
        >
          <u>Transportation</u>
        </Typography>
        <Typography
          sx={{ color: "white", zIndex: "5", textShadow: "1px 2px black" }}
        >
          <b>One-way Ticket, Local Transport : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[42].usd.avg
            : null}{" "}
          $
          <br />
          <b>Monthly Pass, Regular Price : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[46].usd.avg
            : null}{" "}
          $
          <br />
          <b>Taxi Start, Normal Tariff : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[45].usd.avg
            : null}{" "}
          $
          <br />
          <b>Taxi, price for 1 km, Normal Tariff : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[44].usd.avg
            : null}{" "}
          $
          <br />
          <b>Taxi, price for 1 hour Waiting, Normal Tariff : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[43].usd.avg
            : null}{" "}
          $
          <br />
          <b>Gasoline, 1 liter : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[40].usd.avg
            : null}{" "}
          $
          <br />
          <b>Volkswagen Golf 1.4 90 KW Trendline / new car : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[46].usd.avg
            : null}{" "}
          $
          <br />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "18px",
          justifyContent: "center",
          placeItems: "center",
          backgroundColor: "rgba(100,100,100,0.2)",
        }}
      >
        <Typography variant="h4" paddingBottom={"10px"}>
          <u>Utilities Per Month</u>
        </Typography>
        <Typography>
          <b> Electricity, Heating or Cooling, Water and Garbage : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[48].usd.avg
            : null}{" "}
          $
          <br />
          <b>Prepaid Mobile Tariff Local, price per 1 min: </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[47].usd.avg
            : null}{" "}
          $
          <br />
          <b>Internet, 60 Mbps or More, Unlimited Data, Cable/ADS : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[49].usd.avg
            : null}{" "}
          $
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          fontSize: "18px",
          justifyContent: "center",
          placeItems: "center",
          backgroundColor: "rgba(100,100,100,0.2)",
        }}
      >
        <Typography variant="h4" paddingBottom={"10px"}>
          <u>Salaries And Financing</u>
        </Typography>
        <Typography>
          <b> Cinema ticket, 1 Seat : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[37].usd.avg
            : null}{" "}
          $
          <br />
          <b>Average Monthly Net Salary, After Tax : </b>
          {CommoditiesData.data
            ? CommoditiesData.data.prices[36].usd.avg
            : null}{" "}
          $
          <br />
          <b>Mortgage Interest Rate in Percentages : </b>
          {CommoditiesData.data ? CommoditiesData.data.prices[52].avg : null} %
        </Typography>
      </Box>
    </Container>
  );
};

export default CountryInfo;
