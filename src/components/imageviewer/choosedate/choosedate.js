import React from "react";
import Moment from "moment";
import {Button, ButtonGroup, Fade} from "reactstrap";
import styled from 'styled-components'


export default function ChooseDate(props) {

    const setDateMod = props.setDateMod;
    const dateMod = props.dateMod;

    const Date = styled.span`

    `;

    return (
        <>
        <ButtonGroup>
        <Button onClick={() => {setDateMod(dateMod - 1)}}>Previous day</Button>
        {(dateMod != 0) ? <Button onClick={() => {setDateMod(dateMod + 1)}}>Next day</Button> : ''}
        </ButtonGroup>&nbsp;
        <Date className="datetext">{Moment().add(dateMod, 'days').format('MMMM Do YYYY')}{(dateMod === 0) ? ': Today' : ''}</Date>
        </>
    );
};