import duck from "./../images/404duck.gif"
import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <>
        <h2>404</h2>
        <p>Nothing to see here.</p>
        <Link to="/">Return to Homepage</Link>
        <img src={duck} alt="crying duck"/>
        </>
    )
}

export default ErrorPage;