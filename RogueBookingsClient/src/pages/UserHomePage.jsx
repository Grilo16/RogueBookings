import { useContext } from "react";
import styled from "styled-components";
import TableComponent from "../components/BusinessPages/HelperComponents/TableComponent";
import NavbarComponent from "../components/NavBar/NavbarComponent";
import DefaultBusinessView from "../components_refactored/basePages/DefaultBusinessView";
import DefaultUserView from "../components_refactored/basePages/DefaultUserView";
import HeaderComponent from "../components_refactored/headerComponent/HeaderComponent";
import PageTitle from "../components_refactored/UtilityComponents/PageTitle";
import { MasterContext } from "../containers/MasterContainer";

const UserHomePage = ()=>{


    const {state, dispatch} = useContext(MasterContext)
    
    const userDetails = {
        Name : state.user.firstName + " " + state.user.lastName,
        Email: state.user.email, 
        Password: "⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤"
    }
  
    const pageTitle = "Welcome," + " " + state.user.firstName + "!"

    return (
        <DefaultUserView>

        <PageTitle title={pageTitle}/>

        <TableComponent  tdPaddingLeft={"1vw"} tdPaddingRight={"10vw"} tableData={userDetails} tdTxtAlign={"right"} col2Align={"left"} tableWidth={"32vw"}/>

        </DefaultUserView>

    )
};

export default UserHomePage;