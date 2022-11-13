import { Button, Box, TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Image from "../components/images/AnyTravel.png";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "15%",
        height: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(100, 100, 100, 0.8)",
      }}
    >
      <Button
        color="blue"
        variant="h6"
        component="div"
        sx={{
          marginTop: "40px",
          marginBottom: "30px",
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
      <Button component="div" sx={{ marginTop: "20px", fontSize: "120%" }}>
        <Link to="/Search">Search a location</Link>
      </Button>
      <Button component="div" sx={{ marginTop: "20px", fontSize: "120%" }}>
        <Link to="/MyTrips">My trips</Link>
      </Button>
      <Button component="div" sx={{ marginTop: "20px", fontSize: "120%" }}>
        <Link to="/Create">Create account</Link>
      </Button>
      <Button component="div" sx={{ marginTop: "20px", fontSize: "120%" }}>
        <Link to="/About">About</Link>
      </Button>
      <Outlet />
    </Box>
  );
};

export default Layout;
