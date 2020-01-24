import React from "react";
import {Button} from "reactstrap";
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 7px;
`;

export default function ChooseDate(props) {

    const setDateMod = props.setDateMod;
    const dateMod = props.dateMod;



    return (
            <ButtonsContainer>
                <Button style={{backgroundColor: "inherit", color: 'black'}} onClick={() => {setDateMod(dateMod - 1)}}>Previous day</Button>
                {(dateMod !== 0) ? <Button style={{backgroundColor: "inherit", color: 'black'}} onClick={() => {setDateMod(dateMod + 1)}}>Next day</Button> : ''}
            </ButtonsContainer>
    );
};