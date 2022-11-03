import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ErrorPage from "./ErrorPage/ErrorPage";
import About from "./About/About";
import Bookings from "./Bookings";
import Users from "./Users";
import Classes from "./Classes/Classes";
import Businesses from "./Businesses";
import HolderPage from "../../MessySpaceForHookingUpServerLetsGo/HolderPage";
import NewUser from "./Users/NewUser";
import Login from "./Users/Login";
import UserDashboard from "../UserDashboard/UserDashboard";
import Profile from "../UserDashboard/ContentContainer/Profile/Profile";

function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<NewUser />} />
        <Route path="/dashboard" element={<UserDashboard user="user" />} />
        <Route
          path="/dashboard/Profile"
          element={<UserDashboard user="user" content={<Profile />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/messypage" element={<HolderPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default Pages;
