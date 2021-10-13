import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    let renderItems = () => (
        <>
            <Left>
                <H3>
                    Contact Us
                </H3>
                <H6>Free download Landing <br />page Felicity Hotel</H6>
                <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Para>
            </Left>
            <Right>
                <Form>
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="number" placeholder="Phone Number" />
                    <Message placeholder="Message" />
                    <Submit value="Send" />
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
`;
const Left = styled.div`
    width: 49%;
`;
const H3 = styled.h3`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const H6 = styled.h6`
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Para = styled.p`
    font-size: 18px;
`;
const Right = styled.div`
    width: 48%;
    position: relative;
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
`;

