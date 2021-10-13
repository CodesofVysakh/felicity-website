import React from 'react';
import styled from 'styled-components';
import Pic1 from '../../assets/images/img1.jpg'
import Pic2 from '../../assets/images/img2.jpg'
import Pic3 from '../../assets/images/img3.jpg'
import Pic4 from '../../assets/images/img4.jpg'

export default function Feature() {
    let renderItems = () => (
        <>
            <Item>
                <Left>
                    <H3>Choose The Perfect <Span>Accomodation</Span></H3>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus! Dignissimos impedit, aperiam quam temporibus iusto vero cupiditate tempore. Aspernatur deleniti voluptates pariatur ab odit nam ullam quasi quibusdam enim, impedit repellendus eum qui dolorum sed sapiente odio harum rem.</Para>
                    <Button>See More</Button>
                </Left>
                <Right>
                    <Pic src={Pic1} alt="Image" />
                    <Pic src={Pic2} alt="Image"  />
                    <Pic src={Pic3} alt="Image"  />
                </Right>
            </Item>
            <Item>
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
        <Items>
            {renderItems()}
        </Items>
    )
}

const Items = styled.div``;
const Item = styled.div``;
const Left = styled.div``;
const H3 = styled.h3``;
const Span = styled.span``;
const Para = styled.p``;
const Button = styled.a``;
const Right = styled.div``;
const Pic = styled.img``;


