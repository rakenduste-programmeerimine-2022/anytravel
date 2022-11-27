import { Box, Container, Typography } from "@mui/material";
import Layout from "./Layout.js";
import Weather from "../components/Weather";
import Hotels from "../components/Hotels.js";
import CountryInfo from "../components/countryInfo";

const SearchResult = () => {
  return (
    <Box>
      <Layout></Layout>
      <Weather></Weather>
      <Hotels></Hotels>
      <CountryInfo></CountryInfo>
    </Box>
  );
};

export default SearchResult;
