import styled from "styled-components";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import { ContentDiv } from "../../../../containers/MasterContainer";
import ColorSelectComponent from "../../../../components/colorSelectComponents/ColorSelectComponent";
import ButtonComponent from "../../../../components/formComponents/ButtonComponent";

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
        <ContentDiv>

            <h1>Settings</h1>

        <SettingsForm> 
        <h2>Details</h2>
        <ButtonComponent newColor="#9897e3" height={"1.5vw"} width={"4vw"} paddingLeft={"1.3vw"} paddingRight={"0vw"} marginLeft={"25vw"} marginTop={"1vw"}  label={"Edit"} fontSize={"0.8vw"} position={"absolute"}/>

         </SettingsForm>

        <TableComponent tableData={displayData} tableWidth={"30vw"} tdTxtAlign={"left"} invertColors={true} col2Align={"left"}/>

        <ThemeSelectDiv>
        <h3>Theme:</h3>   

        <ColorDivContainer>
                {colors}
        </ColorDivContainer>
        </ThemeSelectDiv>

        </ContentDiv>
        )
}; 



const SettingsForm = styled.form`
display: flex;
margin-bottom: -1.6vw;
margin-left: -23.5vw;
width: max-content;
`

const ThemeSelectDiv = styled.div`
text-align: left;
`

const ColorDivContainer = styled.div`
display : flex;

`

export default SettingsPage;