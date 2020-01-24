import React, {useState, useEffect} from "react";
import Axios from "axios";
import Moment from "moment";
import styled from "styled-components";

import Image from "./image";
import ChooseDate from "./choosedate"
import Explanation from "./explanation";


const ViewerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
`;

const Date = styled.p`
    margin: 0;
`;
const Title = styled.h2`
    font-size: 1rem;
`;
const PhotoCredit = styled.p`
    margin: 0;
`;

const BottomContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function ImageViewer() {
    //Set up state in top level of imageviewer
  const [dateMod, setDateMod] = useState(0);
  const [image, setImage] = useState({});

  //Set up useEffect in top level, used moment.js for date formatting and easy methods for incrementing and decrementing from the current date
  useEffect( () => {

  Axios.get('https://api.nasa.gov/planetary/apod?api_key=St7FqTCHeiFO0alwjwTlvi7oe0aCXpx4bgaC5hFA&date=' + Moment().add(dateMod, 'days').format('YYYY-MM-DD'))
  .then(response => {
      console.log(response.data);
      setImage(response.data);
  })
  .catch(error => {
      console.log(error);
  })
  }, [dateMod]);

  //Rendered multiple components one after the other
  return (
        <ViewerContainer>
            <Date className="datetext">{Moment().add(dateMod, 'days').format('MMMM Do YYYY')}{(dateMod === 0) ? ': Today' : ''}</Date>
            <PhotoCredit>{image.copyright}</PhotoCredit>
            <Title>{image.title}</Title>
            <Image image={image}/>
            <BottomContainer>
                <Explanation explanation={image.explanation}/>
                <ChooseDate dateMod={dateMod} setDateMod={setDateMod}/>
            </BottomContainer>
        </ViewerContainer>
  );
}