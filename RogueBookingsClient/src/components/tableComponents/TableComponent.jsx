import styled from "styled-components";

const TableComponent = ({
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  invertColors,
  headings,
  noHeadLabels,
  footings,
  specialRow,
  tdPaddingLeft,
  tdPaddingRight,
  tdMarginLeft,
  tdMarginRight,
  tdTxtAlign,
  col2Align,
  tableWidth,
  tableData,
  fontSize,
}) => {
  let specialSpan;
  if (!tableData) {
    return;
  }

  if (!specialRow) {
    specialRow = false;
  }else if (Array.isArray(specialRow)) {
      specialSpan = Object.keys(specialRow[0]).length;
    } else {
      specialSpan = Object.keys(specialRow).length;
    }

  const mockDataSingle = {
    name: "tome",
    email: "lalala@lalal.com",
    joinDate: "101010",
  };

  const mockDataList = [
    { name: "tome", email: "lalala@lalal.com", joinDate: "101010" },
    { name: "tome", email: "lalala@lalal.com", joinDate: "101010" },
    { name: "tome", email: "lalala@lalal.com", joinDate: "101010" },
    { name: "tome", email: "lalala@lalal.com", joinDate: "101010" },
    { name: "tome", email: "lalala@lalal.com", joinDate: "101010" },
  ];

  // invertColors = true;
  // headings = true;
  // noHeadLabels = false;
  // footings = true;
  // tdPaddingLeft = "4vw"
  // tdPaddingRight = "2vw"
  // tdTxtAlign = "center"
  // specialRow = {title: "bio", content: "asdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfjasdlfkjasdlkfjasdlkfj asldkf jasldkfjasldk fjasldkfjlasdk fjlasdkf jlsadkfjlsdkfj"};
  // tableData = mockDataList
  // tableData = mockDataSingle;
  // tableWidth = "50vw"

  let tableHeadings;
  let tableRows;
  let tableFootings;

  if (Array.isArray(tableData)) {
    tableHeadings = Object.keys(tableData[0]).map((value, index) => {
      return (
        <>
          {noHeadLabels ? (
            <StyledTh key={Math.floor(Math.random(100) * Date.now())}>
              {" "}
            </StyledTh>
          ) : (
            <StyledTh
              key={Math.floor(Math.random(100) * Date.now())}
              tdPaddingLeft={tdPaddingLeft}
              tdPaddingRight={tdPaddingRight}
              tdMarginLeft={tdMarginLeft}
              tdMarginRight={tdMarginRight}
              tdTxtAlign={tdTxtAlign}
            >
              {value}{" "}
            </StyledTh>
          )}
        </>
      );
    });

    tableRows = tableData.map((obj, index) => {
      const data = Object.values(obj).map((value) => {
        return (
          <StyledTd
            key={Math.floor(Math.random(100) * Date.now())}
            tdPaddingLeft={tdPaddingLeft}
            tdPaddingRight={tdPaddingRight}
            tdMarginLeft={tdMarginLeft}
            tdMarginRight={tdMarginRight}
            tdTxtAlign={tdTxtAlign}
          >
            {value}
          </StyledTd>
        );
      });
      if (invertColors === true) {
        return index % 2 === 0 ? (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())} odd="true">
            {data}
          </StyledTr>
        ) : (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())}>
            {data}
          </StyledTr>
        );
      } else {
        return index % 2 === 0 ? (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())}>
            {data}
          </StyledTr>
        ) : (
          <StyledTr odd="true">{data}</StyledTr>
        );
      }
    });

    tableFootings = Object.keys(tableData[0]).map((index) => {
      return (
        <StyledTd
          key={Math.floor(Math.random(100) * Date.now())}
          tdPaddingLeft={tdPaddingLeft}
          tdPaddingRight={tdPaddingRight}
          tdMarginLeft={tdMarginLeft}
          tdMarginRight={tdMarginRight}
          tdTxtAlign={tdTxtAlign}
        >
          {" "}
        </StyledTd>
      );
    });
  } else {
    tableHeadings = [0, 1].map((element) => {
      if (element === 0) {
        return (
          <StyledTh
            key={Math.floor(Math.random(100) * Date.now())}
            tdPaddingLeft={tdPaddingRight}
            tdPaddingRight={tdPaddingLeft}
            tdMarginLeft={tdMarginLeft}
            tdMarginRight={tdMarginRight}
            tdTxtAlign={tdTxtAlign}
          >
            {" "}
          </StyledTh>
        );
      } else {
        return (
          <StyledTh
            key={Math.floor(Math.random(100) * Date.now())}
            tdPaddingLeft={tdPaddingLeft}
            tdPaddingRight={tdPaddingRight}
            tdMarginLeft={tdMarginLeft}
            tdMarginRight={tdMarginRight}
            col2Align={col2Align}
          >
            {" "}
          </StyledTh>
        );
      }
    });

    tableRows = Object.entries(tableData).map((obj, index) => {
      const data = Object.values(obj).map((value, index2) => {
        if (index2 % 2 === 0) {
          return (
            <StyledTd
              key={Math.floor(Math.random(100) * Date.now())}
              tdPaddingLeft={tdPaddingRight}
              tdPaddingRight={tdPaddingLeft}
              tdMarginLeft={tdMarginLeft}
              tdMarginRight={tdMarginRight}
              tdTxtAlign={tdTxtAlign}
            >
              {value}
            </StyledTd>
          );
        } else {
          return (
            <StyledTd
              key={Math.floor(Math.random(100) * Date.now())}
              tdPaddingLeft={tdPaddingLeft}
              tdPaddingRight={tdPaddingRight}
              tdMarginLeft={tdMarginLeft}
              tdMarginRight={tdMarginRight}
              col2Align={col2Align}
            >
              {value}
            </StyledTd>
          );
        }
      });
      if (invertColors === true) {
        return index % 2 === 0 ? (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())} odd="true">
            {data}
          </StyledTr>
        ) : (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())}>
            {data}
          </StyledTr>
        );
      } else {
        return index % 2 === 0 ? (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())}>
            {data}
          </StyledTr>
        ) : (
          <StyledTr key={Math.floor(Math.random(100) * Date.now())} odd="true">
            {data}
          </StyledTr>
        );
      }
    });

    tableFootings = [1, 2].map((index) => {
      return (
        <StyledTd
          key={Math.floor(Math.random(100) * Date.now())}
          tdPaddingLeft={tdPaddingLeft}
          tdPaddingRight={tdPaddingRight}
          tdMarginLeft={tdMarginLeft}
          tdMarginRight={tdMarginRight}
          tdTxtAlign={tdTxtAlign}
        >
          {" "}
        </StyledTd>
      );
    });
  }

  return (
    <TableDiv marginLeft={marginLeft} marginRight={marginRight} fontSize={fontSize} marginBottom={marginBottom} marginTop={marginTop}>
      <StyledTable tableWidth={tableWidth}>
        {headings ? (
          <StyledTHead>
            <StyledTr>{tableHeadings}</StyledTr>
          </StyledTHead>
        ) : null}

        <StyledTBody>
          {tableRows}
          {specialRow ? (
            <StyledTr>
              <StyledTd
                colSpan={specialSpan}
                tdPaddingLeft={tdPaddingLeft}
                tdPaddingRight={tdPaddingRight}
                tdMarginLeft={tdMarginLeft}
                tdMarginRight={tdMarginRight}
                tdTxtAlign={tdTxtAlign}
              >
                <StyledSpecialRow>
                  <SpecialRowTitle>{specialRow.title}</SpecialRowTitle>
                  <SpecialRowContent className="scroll-within">
                    <SpecialRowP>{specialRow.content}</SpecialRowP>
                  </SpecialRowContent>
                </StyledSpecialRow>
              </StyledTd>
            </StyledTr>
          ) : null}
        </StyledTBody>
        {footings ? (
          <StyledTFoot>
            <StyledTr footer={footings}>{tableFootings}</StyledTr>
          </StyledTFoot>
        ) : null}
      </StyledTable>
    </TableDiv>
  );
};

const TableDiv = styled.div`
  font-size: ${(props)=> props.fontSize? props.fontSize: "1vw"};
  border-radius: 1.5vw;
  width: max-content;
  height: max-content;
  padding: 1px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "1vw")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "1vw")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "1vw")};
  margin-bottom:${(props) => (props.marginBottom ? props.marginBottom : null)}
`;

const StyledTable = styled.table`
border-collapse: collapse;
border-radius: 1.5vw;
overflow: hidden;
display: block;
width: ${(props) => (props.tableWidth ? props.tableWidth : "min-content")};
box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.2);
`;

const StyledTBody = styled.tbody`
background-color: white;

`;

const StyledTHead = styled.thead`
height: 1.5vw;
`;
const StyledTFoot = styled.tfoot`
height: 1vw;
`;
const StyledTr = styled.tr`
background-color: ${(props) =>
  props.header || props.footer
      ? "#cccbf8"
      : props.odd
      ? "#eeeefc"
      : "#ffffff"};
      
      `;
      
      const StyledTh = styled.th`
      background-color: #cccbf8;
      border: none;
      text-align: ${(props) =>
        props.tdTxtAlign
        ? props.tdTxtAlign
        : props.col2Align
        ? props.col2Align
        : "center"};
        padding-left: ${(props) =>
          props.tdPaddingLeft ? props.tdPaddingLeft : "2vw"};
          padding-right: ${(props) =>
            props.tdPaddingRight ? props.tdPaddingRight : "2vw"};
            
            `;
            
  const StyledTd = styled.td`
  padding: 0.5vw;
  margin-left: ${(props)=> props.tdMarginLeft? props.tdMarginLeft : "initial"};
  margin-right: ${(props)=> props.tdMarginRight? props.tdMarginRight : "initial"};
  text-align: ${(props) =>
    props.tdTxtAlign
      ? props.tdTxtAlign  
      : props.col2Align
      ? props.col2Align
      : "center"};
  padding-left: ${(props) =>
    props.tdPaddingLeft ? props.tdPaddingLeft : "2vw"};
  padding-right: ${(props) =>
    props.tdPaddingRight ? props.tdPaddingRight : "2vw"};

    border: none;
`;

const StyledSpecialRow = styled.div`
  text-align: center;
`;
const SpecialRowContent = styled.div`
  box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.2);
  border-radius: 1.5vw;
  max-height: 15vw;
  margin-bottom: 0.5vw;
  overflow: scroll;
`;

const SpecialRowTitle = styled.p`
  margin-bottom: 0.2vw;
  margin-top: 0.1vw;
`;

const SpecialRowP = styled.p``;

export default TableComponent;
