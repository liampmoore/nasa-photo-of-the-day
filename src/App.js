import React, {useState, useEffect} from "react";

import Axios from "axios";
import Moment from "moment";

import Header from "./components/header/header"
import Image from "./components/image/image";
import ChooseDate from "./components/choosedate/choosedate"

import "./App.css";

function App() {

  //Set up state in top level
  const [dateMod, setDateMod] = useState(0);
  const [image, setImage] = useState({});

  //Set up useEffect in top level
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
        <Header/>
        <ChooseDate dateMod={dateMod} setDateMod={setDateMod}/>
        <Image image={image}/>
      </>
  );
}

export default App;
