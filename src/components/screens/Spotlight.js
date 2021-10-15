import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png';
import BackgroundImage from '../../assets/images/banner.jpg';
import MenuIcon from '../../assets/images/menu_icon.png';
import CloseIcon from '../../assets/images/close.png';
import SmallLogo from '../../assets/images/small_logo.jpeg';
import '../../App.css'

export default function Spotlight() {
    const [isActive, setActive] = useState(false);
    const toggle = () =>{
        setActive(!isActive);
    }

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
                    <MenuButton isActive={isActive}>
                        <Container src={MenuIcon} alt="Hamburger Button" onClick={toggle} />
                    </MenuButton>
                    <BurgerDiv isActive={isActive}>
                        <SmallLogoContainer src={SmallLogo} alt="Logo" />
                        <CloseButton  onClick={toggle}>
                            <Container src={CloseIcon} alt="Close Button" />
                        </CloseButton>
                        <MenuUl>
                            <MenuLi>About</MenuLi>
                            <MenuLi>Contact Us</MenuLi>
                            <MenuButtonLi>Sign In</MenuButtonLi>
                        </MenuUl>
                    </BurgerDiv>
                    <Overlay onClick={toggle} isActive={isActive}>
                        </Overlay>
                </Right>
            </Header>
            <Content>
                <H3>Welcome to Hotel Felicity <Br />Landing Page 2021</H3>
                <Para>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Para>
                <Button>Read More</Button>
            </Content>
            <Bottom>
                <Form>
                    <Wrap>
                        <Label>
                            Arrival Date
                        </Label>
                        <Input type="date"  />
                    </Wrap>
                    <Wrap>
                        <Label>
                            Departure Date
                        </Label>
                        <Input type="date" />
                    </Wrap>
                    <Wrap>    
                        <Label>
                            Person
                        </Label>
                        <Input type="number" placeholder="2" />
                    </Wrap>
                    <Wrap>
                        <Submit type="submit" value="Book Now" />
                    </Wrap>
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
    background: url(${BackgroundImage});
    background-size: cover;
    transition-duration: 0.5s;
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
const Right = styled.div`
    
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px){
        display: none;
    }
`;
const Li = styled.li`
    margin-right: 50px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        color: #000;
        transition: 0.3s ease;
    }
    @media all and (max-width: 980px){
        margin-right: 30px;
        font-size: 14px;
    }
`;
const ButtonLi = styled.li`
    background: #fff;
    padding: 12px 32px;
    border-radius: 30px;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #f1ca4d;
        color: #fff;
        transition: 0.3s ease;
    }
    @media all and (max-width: 980px){
        font-size: 14px;
    }
`;
const MenuButton = styled.div`
    display: none;
    @media all and (max-width: 768px){
        display: block;
        opacity: ${({isActive}) => (isActive ? '0' : '1')};
        transition: .3s ease-in-out;
    }
`;
const BurgerDiv = styled.div`
    position: fixed;
    top:0;
    transition: 0.3s ease-in-out;
    right: ${({isActive}) => (isActive ? '0' : '-1000px')};
    z-index: 2;
`;
const SmallLogoContainer = styled.img`
    width: 45px;
    z-index: 3;
    border-radius: 50%;
    border: 1px solid orange;
    position: absolute;
    top: 22px;
    right: 135px;
`;
const CloseButton = styled.div`
    width: 30px;
    @media all and (max-width: 768px){
        z-index: 3;
        position: absolute;
        top: 25px;
        right: 25px;

    }
`;
const MenuUl = styled.ul`
    background: #fff;
    color: #000;
    height: 100vh;
    width: 200px;
    padding: 100px 0;
    text-align: center;

`;
const MenuLi = styled.li`
    margin-bottom: 20px;
`;
const MenuButtonLi = styled.li`
    background: #f1ca4d;
    padding: 12px;
    width: 80%;
    margin: 0 auto;
    border-radius: 30px;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #d96112;
        color: #fff;
        transition: 0.3s ease;
    }
`;
const Overlay = styled.div`
 @media all and (max-width: 768px){
     background: rgba(0,0,0,0.6);
     position: absolute;
     top:0;
     left: 0;
     opacity: ${({isActive}) => (isActive ? '1' : '0')};
     width: 100vw;
     height: 100vh;
     transition: 0.3s ease-in-out;
     z-index: 1;
    }
`;
const Content = styled.div`
    text-align: center;
    padding: 60px 0 120px;
    @media all and (max-width: 980px){
        padding: 60px 0 100px;
    }
`;
const H3 = styled.h3`
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 auto 15px;
    @media all and (max-width: 980px){
        font-size: 40px;
    }
    @media all and (max-width: 480px){
        font-size: 26px;
    }
`;
const Br = styled.br`
     @media all and (max-width: 768px){
        display: none;
    }
`;
const Para = styled.p`
    width: 90%;
    margin: 0 auto 50px; 
`;
const Button = styled.a`
    display: block;
    width: 20%;
    margin: 0 auto;
    background: #fff;
    color: #000;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #f1ca4d;
        color: #fff;
        border-radius: 25px;
        transition: 0.3s ease;
    }
    @media all and (max-width: 768px){
        width: 30%;
    }
    @media all and (max-width: 480px){
        width: 60%;
    }
`;
const Bottom = styled.div`
    background: #fff;
    color: #000;
    padding: 50px 80px 0;
    border-radius: 45px 45px 0 0;
    @media all and (max-width: 1080px){
        padding: 40px 60px 0;
    }
    @media all and (max-width: 980px){
        padding: 30px 30px 0;
    }

`;
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-wrap: wrap;
`;
const Label = styled.label`
    display: block;
    color: #8c8c8c;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 15px;
    @media all and (max-width: 980px){
        font-size: 14px;
    }
`;
const Input = styled.input`
    background: #eeeeee;
    border-radius: 30px;
    width: 90%;
    &[type = "date"]{
        padding: 10px 16px;
    }
    &[type = "number"]{
        padding: 14px 24px;
    }
    @media all and (max-width: 480px){
        width: 100%;
    }
`;
const Wrap = styled.div`
    width: 25%;
    @media all and (max-width: 768px){
        width: 50%;
        margin-bottom: 15px;
    }
    @media all and (max-width: 480px){
        width: 100%;
    }
`;
const Submit = styled.input`
    background: #000;
    color: #fff;
    padding: 12px 32px;
    border-radius: 10px;
    width: 100%;
    font-size: 19px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #f1ca4d;
        color: #fff;
        border-radius: 25px;
        transition: 0.3s ease;
    }
    @media all and (max-width: 980px){
        font-size: 14px;
    }
`;










