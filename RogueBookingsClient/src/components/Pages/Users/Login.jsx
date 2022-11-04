import TextField from "../../Forms/inputFields/TextField";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h2>A happy little login page</h2>
      <TextField fieldName="Email"/>
      <TextField fieldName="Password"/>
      <Link to="/dashboard">dashboard</Link>
    </>
  );
}

export default Login;
