import React from "react";
import { Navigate } from "react-router";
import { useLocalState } from "../util/useLocalStorage";

const PrivateRouteTrips = ({ children }) => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/MyTrips" />;
};

export default PrivateRouteTrips;
