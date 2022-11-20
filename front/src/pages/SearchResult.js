import { Box, Container, Typography } from "@mui/material";
import Layout from "./Layout.js";
import Weather from "../components/Weather";

const SearchResult = () => {
  return (
    <Box>
      <Layout></Layout>
      <Weather></Weather>
    </Box>
  );
};

export default SearchResult;
