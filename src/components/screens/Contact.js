import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    let renderItems = () => (
        <>
            <Left>
                <H3>
                    Contact Us
                </H3>
                <H6>Free download Landing <Br />page Felicity Hotel</H6>
                <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Para>
            </Left>
            <Right>
                <Form>
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="number" placeholder="Phone Number" />
                    <Message placeholder="Message" />
                    <Submit type="submit" value="Send" />
                </Form>
            </Right>
        </>
    )
    return (
        <Block>
            <Div className="wrapper">
                {renderItems()}
            </Div>
        </Block>
    )
}
const Block = styled.div`
    background: #242423;
    color: #fff;
`;
const Div = styled.div`
    padding: 80px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media all and (max-width: 768px){
        flex-direction: column-reverse;
    }
`;
const Left = styled.div`
    width: 49%;
    @media all and (max-width: 768px){
        padding-top: 300px;
        width: 100%;
    }
`;
const H3 = styled.h3`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 480px){
        font-size: 35px;
    }
`;
const H6 = styled.h6`
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 480px){
        font-size: 20px;
    }
`;
const Br = styled.br`
    @media all and (max-width: 980px){
        display: none;
    }
`;
const Para = styled.p`
    font-size: 18px;
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`;
const Right = styled.div`
    width: 48%;
    position: relative;
    @media all and (max-width: 768px){
        width: 100%;
    }
`;
const Form = styled.form`
    background: #d75430;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 55px 30px;
    border-radius: 16px;
    position: absolute;
    bottom: -260px;
    right: 0;
    width: 100%;
    
`;
const Input = styled.input`
    background: #fff;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 15px;
`;
const Message = styled.input`
    padding: 40px 20px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 35px;
`;
const Submit = styled.input`
    background: #000;
    font-size: 18px;
    padding: 16px;
    color: #fff;
    border-radius: 10px;
    width: 40%;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #f1ca4d;
        color: #fff;
        border-radius: 25px;
        transition: 0.3s ease;
    }
    @media all and (max-width: 480px){
        width: 60%;
    }
`;

