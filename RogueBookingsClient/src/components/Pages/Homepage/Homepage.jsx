import React from "react";
import { Link } from "react-router-dom";


function Homepage(){
    return(
        <>
        <header>Rogue Bookings Homepage</header>
        <h2>Welcome</h2>
        <button><Link to="/users/new">Sign up</Link></button>
        <button><Link to="/login">Log In</Link></button>
        
        </>
    )
};

export default Homepage;