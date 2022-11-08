import styled from "styled-components";
import ButtonComponent from "../../../Forms/ButtonComponent";
import TableComponent from "../../HelperComponents/TableComponent";
import ColorSelectComponent from "./ColorSelectComponent";

const SettingsPage = () => {

const displayData = {
    name: "Duck Yoga",
    owner: "Thomas Duck",
    Address: "Actually it is 69 quackers lane... on 420 street meadows bay area. Postcode is accurate lol "
}



const colors = ["#7472bd", "#4894da", "#c4caa2", "#ce6f17", "#e1237f"].map((color, index)=>{
    return (
        <ColorSelectComponent key={index} color={color}/> 
    )
})



    return (
        <SettingsDivContainer>
        <br />
        <br />
        <br />
        <br />

            <h1>Settings</h1>

        <SettingsForm> 
        <h2>Details</h2>
        <ButtonComponent newColor="#9897e3" height={"1.5vw"} width={"4vw"} paddingLeft={"0vw"} paddingRight={"0vw"} marginLeft={"25vw"} marginTop={"1vw"}  label={"edit"} fontSize={"0.8vw"} position={"absolute"}/>

         </SettingsForm>

        <TableComponent tableData={displayData} tableWidth={"30vw"} tdTxtAlign={"left"} invertColors={true} col2Align={"left"} marginLeft={"19vw"}/>

        <ThemeSelectDiv>
        <h3>Theme:</h3>   

        <ColorDivContainer>
                {colors}
        </ColorDivContainer>
        </ThemeSelectDiv>

        </SettingsDivContainer>
        )
}; 


const SettingsDivContainer = styled.div`
text-align: center;
`
const SettingsForm = styled.form`
display: flex;
margin-left: 20vw;
margin-bottom: -1.6vw;
`

const ThemeSelectDiv = styled.div`
text-align: left;
margin-top: 7vw;
margin-left: 20vw;
`

const ColorDivContainer = styled.div`
display : flex;

`

export default SettingsPage;