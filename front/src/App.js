import "./App.css";
import SearchQuick from "./pages/SearchQuick.js";
import MyTrips from "./pages/MyTrips.js";
import About from "./pages/About.js";
import Layout from "./pages/Layout.js";
import CreateAccount from "./pages/CreateAccount.js";
import SearchResult from "./pages/SearchResult.js";
import MyAccount from "./pages/MyAccount";
import EditProfile from "./pages/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes/index";
import PrivateRouteTrips from "./PrivateRoutes/indexMyTrips";
import MyTripsLogged from "./pages/MyTripsLogged.js";
import PlanTrip from "./pages/PlanTrip";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchQuick />} />
        <Route path="/Search" element={<SearchQuick />} />
        <Route
          path="/MyTrips"
          element={
            <PrivateRouteTrips>
              <MyTripsLogged />
            </PrivateRouteTrips>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<CreateAccount />} />
        <Route path="/Searchresults" element={<SearchResult />} />
        <Route
          path="/MyAccount"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/EditProfile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/PlanTrip" element={<PlanTrip />} />
      </Routes>
    </Router>
  );
}

export default App;
