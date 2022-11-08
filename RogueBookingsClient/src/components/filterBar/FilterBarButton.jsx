import styled from "styled-components";

const FilterBarButton = ({filter}) => {
    return (
        <BarButtonDiv>

        <FilterLabel>{filter}</FilterLabel>
        </BarButtonDiv>
    )
};

const FilterLabel = styled.h2`
margin: 0;
`

const BarButtonDiv = styled.div`
background-color: grey;
border-radius: 5vw;
height: 2vw;
`

export default FilterBarButton;