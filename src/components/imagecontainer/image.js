import React from "react";
import "./imagecontainer.css";

export default function Image(props) {
    console.log(props.image.url)
    return (
    <img className="image" src={props.image.url} />
    )
}