import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";


const TableDiv = styled.div`
width: 30vw;
margin-left: 27vw;

`
const TableHeader = styled.h4`
text-align: left;
margin-left: 1vw;
background-color: white;
margin-bottom: 0.8vw;
font-size: 1vw;

`
const TableDataDiv = styled.div`
font-size: 0.94vw;
border-radius: 1.8vw;
overflow: hidden;
`
const TableRowContainer = styled.div`
background-color: ${(props)=> props.color ? props.color: "#f5f4ff"};
display : flex;
height: 1.8vw;
padding-top: 0.8vw;
`

const TableData = styled.p`
margin: 0;
margin-top: -1vw;
padding: 1vw;
margin-left: 1.5vw;
text-align: left;
min-width: 5vw;
`


const UserDetailsTable = () => {

    const {state, dispatch} = useContext(MasterContext)

    return (
            <TableDiv>
                <TableHeader>My details </TableHeader>
                
                <TableDataDiv> 

                    <TableRowContainer>
                        <TableData>Name</TableData>
                        <TableData>{state.user.firstName + " " + state.user.lastName}</TableData>
                    </TableRowContainer>

                    <TableRowContainer color={"#ffffff"}>
                        <TableData>Email</TableData>
                        <TableData>{state.user.email}</TableData>
                    </TableRowContainer>

                    <TableRowContainer>
                        <TableData>Password</TableData>
                        <TableData>no password feature just yet</TableData>
                    </TableRowContainer>

                </TableDataDiv>
            
            </TableDiv>
        )
}; 

export default UserDetailsTable;