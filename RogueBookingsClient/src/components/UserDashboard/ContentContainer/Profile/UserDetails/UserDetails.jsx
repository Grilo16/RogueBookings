import { RogueContext } from "../../../../ContextPage";

function UserDetails() {
  return (
    <>
      <h3>User Details</h3>
      <button>Edit</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>state.fname? plus state.lname</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>state.email</td>
          </tr>
          <tr>
            <th>Credits</th>
            <td>credit count</td>
            <td>
              <button>View details</button>
            </td>
          </tr>
          <tr>
            <th>Membership</th>
            <td>only show if memebership</td>
            <td>
              <button>view details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserDetails;
