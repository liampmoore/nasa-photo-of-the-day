import React, {useState, useEffect} from "react";
import Axios from "axios";
import Moment from "moment";
import Image from "./image";
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
        <div className="imageContainer">
            <button className="button" onClick={() => {setDateMod(dateMod - 1)}}>Previous</button>
            <Image image={image}/>
            <button className="button" onClick={() => {setDateMod(dateMod + 1)}}>Next</button>
        </div>
        </>
    )
}