import React from "react";
import { Link } from "react-router-dom";

function NewUserForm(){
    return(
        <>
        <h2>I am the form to add a new user weyhey</h2>
        <p>My submit button will add you to the database and take you to your dashboard</p>
        <button><Link to="/dashboard">Submit</Link></button>
        </>
    )
}

export default NewUserForm;