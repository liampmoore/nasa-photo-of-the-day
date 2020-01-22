import React, {useState, useEffect} from "react";
import Axios from "axios";
import Moment from "moment";
import Image from "./image";
import "./imagecontainer.css"

export default function ImageContainer() {
    const [date, setDate] = useState(Moment().format("YYYY-DD-MM"));
    const [image, setImage] = useState({});

    useEffect( () => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=St7FqTCHeiFO0alwjwTlvi7oe0aCXpx4bgaC5hFA' )
    .then(response => {
        setImage(response.data);
    })
    .catch(error => {
        console.log(error);
    })
    }, [date]);

    return (
        <div className="imageContainer"><Image image={image}/></div>
    )
}