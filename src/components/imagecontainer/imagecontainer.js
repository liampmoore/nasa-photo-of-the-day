import React, {useState, useEffect} from "react";
import Axios from "axios";
import Moment from "moment";
import Image from "./image";
import ChooseDate from "./choosedate"
import "./imagecontainer.css"

export default function ImageContainer() {
    const [dateMod, setDateMod] = useState(0);
    const [image, setImage] = useState({});

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


    return (
        <>
        <p className="datetext"><a  href="https://api.nasa.gov/#apod">https://api.nasa.gov/#apod</a></p>
<p className="datetext">{Moment().add(dateMod, 'days').format('MMMM Do YYYY')}{(dateMod === 0) ? ': Today' : ''}</p>
        <div className="imageContainer">
            <ChooseDate dateMod={dateMod} setDateMod={setDateMod}/>
            <Image image={image}/>
            
        </div>
        </>
    )
}