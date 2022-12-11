import { Container, Typography } from "@mui/material";
import Layout from "./Layout.js";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Outlet, Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "-2%",
        margin: "0",
        padding: "0",
        border: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <Layout></Layout>
      <Container
        sx={{
          position: "relative",
          marginTop: "10%",
          top: "10%",
          left: "50%",
          width: "50%",
          height: "60%",
          aspectRatio: "3/1",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "3%",
          borderRadius: "0.5em",
          transform: "translateX(-50%)",
        }}
      >
        <Stack direction="row" spacing={2}></Stack>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
        <h1>My account!</h1>
        <Typography fontSize={24} color="black">
          Welcome to your account page! <br />
          <br />
        </Typography>
        <List
          sx={{ position: "relative", width: "100%", height: "100%" }}
          component="nav"
          aria-label="account-stuff"
        >
          <ListItem
            button
            onClick={() => (window.location = "/EditProfile")}
            variant="text"
            component="div"
          >
            <Link sx={{ fontSize: "110%" }} to="/EditProfile"></Link>
            <ListItemText primary="Edit profile" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem
            button
            onClick={() => (window.location = "/MyTrips")}
            variant="text"
            component="div"
          >
            <Link sx={{ fontSize: "110%" }} to="/MyTrips"></Link>
            <ListItemText primary="My trips" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>
      </Container>
    </Container>
  );
};

export default MyAccount;