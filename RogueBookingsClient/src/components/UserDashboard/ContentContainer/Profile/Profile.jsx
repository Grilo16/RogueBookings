import UserDetails from "./UserDetails/UserDetails";
import styled from "styled-components";
import UserBusinesses from "./UserBusinesses/UserBusinesses";

function Profile() {
  return (
    <>
      <h3>Profile</h3>
      <UserDetails />
      <UserBusinesses />
    </>
  );
}

export default Profile;
