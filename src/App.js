import React, {useState, useEffect} from "react";
import styled from "styled-components";

import ImageViewer from "./components/imageviewer/imageviewer"


const Header = styled.header``;
const Title = styled.h1``;

function App() {
  
 
  return (
    <>
    <Header>
      <Title className="headertext">NASA APOD </Title>
    </Header>
    <ImageViewer/>
    </>
  )
}

export default App;
