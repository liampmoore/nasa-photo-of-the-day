import React, {useState, useEffect} from "react";
import Axios from "axios";
import Moment from "moment";

import Image from "./image/image";
import ChooseDate from "./choosedate/choosedate"

export default function ImageViewer() {
    //Set up state in top level of imageviewer
  const [dateMod, setDateMod] = useState(0);
  const [image, setImage] = useState({});

  //Set up useEffect in top level, used moment.js for date formatting and easy methods for incrementing and decrementing from the current date
  useEffect( () => {
      console.log(Moment().add(dateMod, 'days').format('YYYY-MM-DD'));
  Axios.get('https://api.nasa.gov/planetary/apod?api_key=St7FqTCHeiFO0alwjwTlvi7oe0aCXpx4bgaC5hFA&date=' + Moment().add(dateMod, 'days').format('YYYY-MM-DD'))
  .then(response => {
      setImage(response.data);
  })
  .catch(error => {
      console.log(error);
  })
  }, [dateMod]);

  //Rendered multiple components one after the other
  return (
      <>
        <ChooseDate dateMod={dateMod} setDateMod={setDateMod}/>
        <Image image={image}/>
      </>
  );
}