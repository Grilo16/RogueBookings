import React from "react";
import { Link } from "react-router-dom";

//TODO
//Rather than having all these links, can we create a list of navbar links and loop through it?
function NavBar() {
  return (
    <>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookings">Booking Log</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/businesses">Businesses</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
