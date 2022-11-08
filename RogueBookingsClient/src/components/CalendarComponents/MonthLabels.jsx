import styled from "styled-components";

const MonthLabels = () => {

    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => {
        return (
            <h3 key={index}>{day}</h3>
        )
    })


    return (
        <MonthLabelsDiv>
            {labels}
        </MonthLabelsDiv>
    )
};

const MonthLabelsDiv = styled.div`
display: flex;
justify-content: space-around;
padding-top: 0.5vw;
height: 4.3vw;
width: 42.69vw;
margin-left: 17.8vw;
font-size: 1vw;
margin-bottom: 1vw;
`

export default MonthLabels;