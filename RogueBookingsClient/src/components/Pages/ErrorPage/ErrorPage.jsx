import duck from "./../../../images/404duck.gif"

function ErrorPage(){
    return(
        <>
        <h2>404</h2>
        <p>Nothing to see here.</p>
        <img src={duck} alt="crying duck"/>
        </>
    )
}

export default ErrorPage;