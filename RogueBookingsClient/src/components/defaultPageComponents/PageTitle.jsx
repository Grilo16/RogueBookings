import styled from "styled-components";

const PageTitle = (props) => {

    return (
        <StyledH1>{props.children}</StyledH1>
    )
};

const StyledH1 = styled.h1`
text-transform: capitalize;
`

export default PageTitle;