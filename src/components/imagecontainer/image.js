import React from "react";
import "./imagecontainer.css";

export default function Image(props) {
    console.log(props.image.url)
    if (!props.image.url) {
        return (
            <img className="image"/>
            )
    }
    else if (props.image.url.substr(0, 19) === "https://www.youtube") {
        return (
            <iframe className="image" height="500" width="900" src={props.image.url}/>
            )
    }
    else {
        return (
            <img className="image" src={props.image.url} />
            )
    }
    
}