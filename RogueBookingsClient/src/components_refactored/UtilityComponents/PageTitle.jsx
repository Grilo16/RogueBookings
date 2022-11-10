import styled from "styled-components";

const PageTitle = ({title}) => {

    return (
        <StyledH1>{title}</StyledH1>
    )
};

const StyledH1 = styled.h1`
text-transform: capitalize;

`

export default PageTitle;