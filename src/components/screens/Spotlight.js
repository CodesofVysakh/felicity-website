import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import BG from '../../assets/images/banner.jpg';
import '../../App.css'

export default function Spotlight() {

    let renderItems = () => (
        <Div className="wrapper">
            <Header>
                <H1><Container src={Logo} alt="Logo" /></H1>
                <Right>
                    <Ul>
                        <Li>About</Li>
                        <Li>Contact Us</Li>
                        <ButtonLi>Sign In</ButtonLi>
                    </Ul>
                </Right>
            </Header>
            <Content>
                <H3>Welcome to Hotel Felicity <br />Landing Page 2021</H3>
                <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, <br />or randomised words which don't look even slightly believable</Para>
                <Button>Read More</Button>
            </Content>
            <Bottom>
                <Form>
                    <Label>
                        Arrival Date
                    </Label>
                    <Input type="text" />
                    <Label>
                        Departure Date
                    </Label>
                    <Input type="email" />
                    <Label>
                        Person
                    </Label>
                    <Input type="number" />
                    <Input type="submit" value="Book Now" />
                </Form>
            </Bottom>
        </Div>
    )

    return (
        <>
            <Body>
                {renderItems()}
            </Body>
        </>
    )
}

const Body = styled.div`
    background: url(${BG});
    background-size: cover;
`;
const Div = styled.div`
    color: #fff;
`;
const Header = styled.header`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const H1 = styled.h1``;
const Container = styled.img``;
const Right = styled.div``;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Li = styled.li`
    margin-right: 50px;
    text-transform: uppercase;
    cursor: pointer;
`;
const ButtonLi = styled.li`
    background: #fff;
    padding: 12px 32px;
    border-radius: 30px;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
`;
const Content = styled.div`
    text-align: center;
    padding: 60px 0 120px;
`;
const H3 = styled.h3`
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 auto 15px;

`;
const Para = styled.p`
    margin-bottom: 50px;
`;
const Button = styled.a`
    background: #fff;
    color: #000;
    padding: 16px 48px;
    border-radius: 8px;
    cursor: pointer;
`;
const Bottom = styled.div`
    background: #fff;
    color: #000;
    padding: 50px;
    border-radius: 45px 45px 0 0;
`;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;











