import { useContext } from "react";
import TableComponent from "../components/tableComponents/TableComponent";
import PageTitle from "../components/defaultPageComponents/PageTitle";
import { ContentDiv, MasterContext } from "../containers/MasterContainer";

const UserHomePage = () => {
  const { state, dispatch } = useContext(MasterContext);

  const userDetails = {
    Name: state.user.firstName + " " + state.user.lastName,
    Email: state.user.email,
    Password: "⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤",
  };

  const pageTitle = "Welcome," + " " + state.user.firstName + "!";

  return (
    <ContentDiv>
      <PageTitle title={pageTitle} />

      <TableComponent
        tdPaddingLeft={"1vw"}
        tdPaddingRight={"10vw"}
        tableData={userDetails}
        tdTxtAlign={"right"}
        col2Align={"left"}
        tableWidth={"32vw"}
      />
    </ContentDiv>
  );
};

export default UserHomePage;
