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
  display: block;
  width: 100%;
  text-align: center; 
  
`;
const Title = styled.h1``;

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
