import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  /* from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } */
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;

  span {
    font-size: 36px;
    /* 버튼에 hover했을 때 */
    &:hover {
      font-size: 48px;
    }
    /* 버튼을 눌렀을 때 */
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;
