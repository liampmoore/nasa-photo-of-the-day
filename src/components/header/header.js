import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <div>
                <h1 className="headertext">NASA APOD </h1>
                <p className="datetext"><a  href="https://api.nasa.gov/#apod">https://api.nasa.gov/#apod</a></p>
            </div>
        </>
    )
}