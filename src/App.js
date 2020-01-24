import React, {useState, useEffect} from "react";
import styled from "styled-components";

import ImageViewer from "./components/imageviewer/imageviewer"


const Header = styled.header`
  margin-left: 5%;
`;
const Title = styled.h1``;

function App() {
  
 
  return (
    <>
    <Header>
      <Title>NASA APOD</Title>
    </Header>
    <ImageViewer/>
    </>
  )
}

export default App;
