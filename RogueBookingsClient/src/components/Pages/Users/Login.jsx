import TextField from "../../Forms/inputFields/TextField";

function Login() {
  return (
    <>
      <h2>A happy little login page</h2>
      <TextField fieldName="Email"/>
      <TextField fieldName="Password"/>
    </>
  );
}

export default Login;
