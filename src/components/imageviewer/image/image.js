import React from "react";
import "./image.css";
import styled from "styled-components";

export default function Image(props) {

    const Img = styled.img`
        height: 70vh;
        object-fit: scale;
    `;


    /* Depending on whether the image of the day is an actual image or a youtube video the image component will either render an img tag or an iframe */
    if (!props.image.url) {
        return (
            <Img className="image"/>
            )
    }
    else if (props.image.url.substr(12, 7) === "youtube") {
        return (
            <iframe className="image" height="500" width="900" src={props.image.url}/>
            )
    }
    else {
        return (
            <Img className="image" src={props.image.url} />
            )
    }
    
}