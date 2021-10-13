import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    let renderItems = () => (
        <>
            <Left>
                <H3>
                    Contact Us
                </H3>
                <H6>Free download Landing page Felicity Hotel</H6>
                <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Para>
            </Left>
            <Right>
                <Form>
                    <Name />
                    <Mail />
                    <Phone />
                    <Message />
                    <Submit />
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
const Div = styled.div``;
const Left = styled.div``;
const H3 = styled.h3``;
const H6 = styled.h6``;
const Para = styled.p``;
const Right = styled.div``;
const Form = styled.form``;
const Name = styled.input``;
const Mail = styled.input``;
const Phone = styled.input``;
const Message = styled.input``;
const Submit = styled.input``;

