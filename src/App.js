import React from "react";
import styled from "styled-components";

import ImageViewer from "./components/imageviewer/imageviewer"

const Container = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  background-color: #c8af9b;
`;
const Header = styled.header`
  width: 100%;
`;
const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin: 0;
`;

function App() {
  
 
  return (
    <Container>
    <Header>
      <Title>NASA APOD</Title>
    </Header>
    <ImageViewer/>
    </Container>
  )
}

export default App;
