import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>

    // 그 전에 사용하던 방식
    // <div style={{ display: "flex" }}>
    //   <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    // </div>
  );
}

export default App;
