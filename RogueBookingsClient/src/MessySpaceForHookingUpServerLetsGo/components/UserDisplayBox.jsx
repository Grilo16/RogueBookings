import { useContext } from "react"
import { HolderContext } from "../HolderPage"
import styled from "styled-components"

const UserDiv = styled.div`
    text-align: center;
    background-color: rgb(255, 0, 100);
    height : 50vh;
    width : 50%;
`

const UserDisplayBox = () => {

    const {state, dispatch} = useContext(HolderContext)


    const users = state.users.map((user)=>{

        return (
                <h1>{user.firstName}</h1>
            )

    })


    return (
        <UserDiv>
            <h2>user will be here</h2>
            {users}
        </UserDiv>

    )
}

export default UserDisplayBox
