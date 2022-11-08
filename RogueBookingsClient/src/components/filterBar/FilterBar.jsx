import styled from "styled-components";
import FilterBarButton from "./FilterBarButton";

const FilterBar = () => {

    const mockFilters = ["student", "teacher", "owner"].map((filter, index)=>{
        return (
            <FilterBarButton key={index} filter={filter}/>
        )
    })



    return (
        <FilterBarDiv> 
            {mockFilters}
        </FilterBarDiv>
    )
}; 



const FilterBarDiv = styled.div`
background-color : #e6e6fe ;
width: max-content;
border-radius: 2vw;
display: flex;
height: 2vw;
`

export default FilterBar;