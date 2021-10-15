import React from 'react';
import styled from 'styled-components';

export default function Foot() {
    return (
        <Div>
            <Para>Copyright 2021 All Right Reserved By Free Html Templates</Para>
        </Div>
    )
}
const Div = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 10px 0;
    @media all and (max-width: 640px){
        width: 70%;
        font-size: 14px;
    }

`;
const Para = styled.p`
@media all and (max-width: 640px){
        font-size: 14px;
    }
`;