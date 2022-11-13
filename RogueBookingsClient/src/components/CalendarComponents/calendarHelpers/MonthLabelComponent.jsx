import styled from "styled-components";

const MonthLabels = () => {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day, index) => {
    return <h3 key={index}>{day}</h3>;
  });

  return <MonthLabelsDiv>{labels}</MonthLabelsDiv>;
};

const MonthLabelsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default MonthLabels;
