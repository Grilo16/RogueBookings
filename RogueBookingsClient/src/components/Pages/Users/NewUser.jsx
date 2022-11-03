import React from "react";
import { Link } from "react-router-dom";
import TextField from "../../Forms/inputFields/TextField";

function NewUser(){
    return(
        <>
        <h2>I am the form to add a new user weyhey</h2>
        <TextField fieldName="Email"/>
        <TextField fieldName="Create Password"/>
        <button><Link to="/dashboard">Sign Up</Link></button>
        </>
    )
}

export default NewUser;