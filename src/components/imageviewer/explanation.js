import React, {useState} from "react";
import {Button, Collapse, CardBody, Card} from "reactstrap";
import styled from "styled-components";


const ExplanationContainer = styled.div`
    min-width: 400px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
    position: absolute;
    `;

export default function Explanation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <ExplanationContainer>
            <Button onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: "inherit", color: "black", zIndex: "2"}}>{!isOpen ? 'Show':'Hide'} Explanation</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody style={{backgroundColor:"smokewhite"}}>{props.explanation}</CardBody>
                </Card>
            </Collapse>
        </ExplanationContainer>
    )
}