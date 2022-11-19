const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "OUGN6CJRWqCNYICXGGMajGuzuGLZFZRf");
encodedParams.append("locationKey", "Tallinn");

const responseList = [];
const options = {
  method: "POST",
  url: "http://dataservice.accuweather.com/currentconditions/v1/100",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    responseList = response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

const WeatherAPI = () => {
  return console.log(responseList);
};
