import { Button, Box, TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Image from "../components/images/AnyTravel.png";

const Layout = () => {
  return (
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
          backgroundSize: "cover",
          width: "60%",
          height: "18%",
          marginLeft: "20%",
        }}
      >
        <Link to="/"></Link>
      </Button>
      <Button
        color="success"
        variant="text"
        component="div"
        sx={{
          marginTop: "8%",
          fontSize: "110%",
          borderBottom: "1px solid black",
        }}
      >
        <Link to="/Search">Search a location</Link>
      </Button>
      <Button
        variant="text"
        component="div"
        sx={{
          marginTop: "8%",
          fontSize: "110%",
          borderBottom: "1px solid black",
        }}
      >
        <Link to="/MyTrips">My trips</Link>
      </Button>
      <Button
        variant="text"
        component="div"
        sx={{
          marginTop: "8%",
          fontSize: "110%",
          borderBottom: "1px solid black",
        }}
      >
        <Link to="/Create">Create account</Link>
      </Button>
      <Button
        variant="text"
        component="div"
        sx={{
          marginTop: "8%",
          fontSize: "110%",
          borderBottom: "1px solid black",
        }}
      >
        <Link to="/About" color={"white"}>
          About
        </Link>
      </Button>
      <Outlet />
    </Box>
  );
};

export default Layout;
