import React from "react";
import Moment from "moment";


export default function ChooseDate(props) {

    const setDateMod = props.setDateMod;
    const dateMod = props.dateMod;

    return (
        <>
        <button className="button" onClick={() => {setDateMod(dateMod - 1)}}>Previous</button>
        {(dateMod != 0) ? <button className="button" onClick={() => {setDateMod(dateMod + 1)}}>Next</button> : ''}
        </>
    );
};