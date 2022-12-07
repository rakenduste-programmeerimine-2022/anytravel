import { Button, Box, TextField, Container } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Image from "../components/images/AnyTravel.png";

import LoginRegister from "../components/LoginRegister.js";

const Layout = () => {
  return (
    <Container>
      <Box
        sx={{
          left: "0",
          width: "15%",
          height: "100%",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(100, 100, 100, 0.9)",
          boxShadow: "5px 0px 10px rgba(0,0,0, 0.5)",
        }}
      >
        <Button
          color="blue"
          variant="h6"
          component="div"
          sx={{
            marginTop: "16%",
            marginBottom: "12%",
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "60%",
            height: "18%",
            marginLeft: "20%",
          }}
        >
          <Link to="/"></Link>
        </Button>
        <Button
          onClick={() => (window.location = "/Search")}
          color="success"
          variant="text"
          component="div"
          sx={{
            marginTop: "8%",
            fontSize: "110%",
            borderBottom: "0.1em solid black",
          }}
        >
          <Link sx={{ fontSize: "110%" }} to="/Search">
            Search a location
          </Link>
        </Button>

        <Button
          variant="text"
          component="div"
          onClick={() => (window.location = "/MyAccount")}
          sx={{
            marginTop: "8%",
            fontSize: "110%",
            borderBottom: "0.1em solid black",
          }}
        >
          <Link sx={{ fontSize: "110%" }} to="/MyAccount">
            My account
          </Link>
        </Button>

        <Button
          onClick={() => (window.location = "/MyTrips")}
          variant="text"
          component="div"
          sx={{
            marginTop: "8%",
            fontSize: "110%",
            borderBottom: "0.1em solid black",
          }}
        >
          <Link sx={{ fontSize: "110%" }} to="/MyTrips">
            My trips
          </Link>
        </Button>

        <Button
          variant="text"
          component="div"
          onClick={() => (window.location = "/About")}
          sx={{
            marginTop: "8%",
            fontSize: "110%",
            borderBottom: "0.1em solid black",
            backgroundColor: "rgba(100,100,100,0.8)",
          }}
        >
          <Link
            sx={{ fontSize: "110%", width: "400%" }}
            to="/About"
            color={"white"}
          >
            About
          </Link>
        </Button>

        <Outlet />
      </Box>
      <LoginRegister></LoginRegister>
    </Container>
  );
};

export default Layout;
