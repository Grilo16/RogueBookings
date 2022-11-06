import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import MasterContainer from "./containers/MasterContainer";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MasterContainer/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App;

{/* <Route path="/" element={<Homepage />} />
<Route path="/users" element={<Users />} />
<Route path="/users/new" element={<NewUser />} />
<Route path="/dashboard" element={<UserDashboard user="user" />} />
<Route
  path="/dashboard/profile"
  element={<UserDashboard user="user" content={<Profile />} />}
/>
<Route
  path="/dashboard/calendar"
  element={<UserDashboard user="user" content={<Calendar/>} />}
/>
<Route path ="/dashboard/businesses/:businessId" element={<UserDashboard user="user" content={<Profile/>}/>}/>
<Route path="/login" element={<Login />} />
<Route path="/about" element={<About />} />
<Route path="/bookings" element={<Bookings />} />
<Route path="/classes" element={<Classes />} />
<Route path="/businesses" element={<Businesses />} />
<Route path="/messypage" element={<MasterContainer />} /> */}