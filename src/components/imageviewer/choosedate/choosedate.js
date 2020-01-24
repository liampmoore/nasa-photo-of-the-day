import React from "react";
import Moment from "moment";
import {Button, ButtonGroup} from "reactstrap";
import styled from 'styled-components'

const ChooseDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
`;

const ButtonsContainer = styled.div`
    width: 70%;
    position: absolute;
    top: 40vh;
    display: flex;
    justify-content: space-between;
`;

export default function ChooseDate(props) {

    const setDateMod = props.setDateMod;
    const dateMod = props.dateMod;

    const Date = styled.p``;

    return (
        <ChooseDateContainer>
            <Date className="datetext">{Moment().add(dateMod, 'days').format('MMMM Do YYYY')}{(dateMod === 0) ? ': Today' : ''}</Date>
            <ButtonsContainer>
                <Button style={{backgroundColor: "inherit"}} onClick={() => {setDateMod(dateMod - 1)}}>Previous day</Button>
                {(dateMod !== 0) ? <Button style={{backgroundColor: "inherit"}} onClick={() => {setDateMod(dateMod + 1)}}>Next day</Button> : ''}
            </ButtonsContainer>
        </ChooseDateContainer>
    );
};