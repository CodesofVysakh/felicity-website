import React from 'react';
import styled from 'styled-components';
import Pic1 from '../../assets/images/img1.jpg'
import Pic2 from '../../assets/images/img2.jpg'
import Pic3 from '../../assets/images/img3.jpg'
import Pic4 from '../../assets/images/img4.jpg'
import '../../App.css'

export default function Feature() {
    let renderItems = () => (
        <>
            <Item >
                <Left>
                    <H3>Choose The Perfect <Span>Accomodation</Span></H3>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus! Dignissimos impedit, aperiam quam temporibus iusto vero cupiditate tempore. Aspernatur deleniti voluptates pariatur ab odit nam ullam quasi quibusdam enim, impedit repellendus eum qui dolorum sed sapiente odio harum rem.</Para>
                    <Button>See More</Button>
                </Left>
                <Container>
                    <Pic className="Pic1" src={Pic1} alt="Image" />
                    <Pic className="Pic2" src={Pic2} alt="Image"  />
                    <Pic className="Pic3" src={Pic3} alt="Image"  />
                </Container>
            </Item>
            <Item isReverse={true}>
                <Left>
                    <Pic src={Pic4} alt="Image"  />
                </Left>
                <Right>
                    <H3>Our Best <Span>Breakfast</Span></H3>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus! Dignissimos impedit, aperiam quam temporibus iusto vero cupiditate tempore. Aspernatur deleniti voluptates pariatur ab odit nam ullam quasi quibusdam enim, impedit repellendus eum qui dolorum sed sapiente odio harum rem.</Para>
                    <Button>Read More</Button>
                </Right>
            </Item>
    </>
    )

    return (
        <Items className="wrapper">
            {renderItems()}
        </Items>
    )
}

const Items = styled.div`
    padding: 80px 0 0;
    @media all and (max-width: 980px){
        padding: 0;
    }
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    @media all and (max-width: 980px){
        flex-direction: ${({isReverse})=> (isReverse ? 'column-reverse' : 'column')};
    }
    @media all and (max-width: 480px){
        padding: 50px 0 0;
    }
`;
const Left = styled.div`
    width: 50%;
    padding-right: 30px;
    @media all and (max-width: 980px){
        width: 100%;
        margin-bottom: 20px;
        padding-right: 0;
    }
`;
const H3 = styled.h3`
    text-transform: capitalize;
    font-size: 50px;
    margin-bottom: 20px;
    @media all and (max-width: 1080px){
        font-size: 45px;
    }
    @media all and (max-width: 480px){
        font-size: 32px;
    }
`;
const Span = styled.span`
    display: block;
    font-weight: bold;
`;
const Para = styled.p`
    line-height: 2em;
    margin-bottom: 50px;
`;
const Button = styled.a`
    display: inline-block;
    background: #000;
    color: #fff;
    padding: 20px 60px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background: #f1ca4d;
        color: #fff;
        border-radius: 25px;
        transition: 0.3s ease;
    }
    @media all and (max-width: 480px){
        padding: 12px 40px;
    }
`;
const Container = styled.div`
    width: 50%;
    display: grid;
    grid-gap: 30px;
    @media all and (max-width: 980px){
        width: 100%;
    }
    @media all and (max-width: 480px){
        grid-gap: 15px;
    }
`;
const Pic = styled.img`
    &.Pic1 {
        grid-column: 1 / span 2;
    }
    &.Pic2 {
        grid-column: 1;
        grid-row: 2;
    }
    &.Pic3 {
        grid-column: 2;
        grid-row: 2;
    }
`;
const Right = styled.div`
    width: 50%;
    text-align: right;
    @media all and (max-width: 980px){
        width: 100%;
        margin-bottom: 20px;
    }
`;