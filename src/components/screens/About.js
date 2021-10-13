import React from 'react';
import styled from 'styled-components';
import AboutImage from '../../assets/images/about_img.jpg';

export default function About() {
    let renderItems = () => (
        <>
            <Left>
                <H5>
                    About Our Hotel
                </H5>
                <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatibus! Dignissimos impedit, aperiam quam temporibus iusto vero cupiditate tempore. Aspernatur deleniti voluptates pariatur ab odit nam ullam quasi quibusdam enim, impedit repellendus eum qui dolorum sed sapiente odio harum rem.
                </Para>
            </Left>
            <Right>
                <Container>
                    <Img src={AboutImage} alt="Video" />
                </Container>
            </Right>
        </>
    )

    return (
        <AboutSection>
            <AboutDiv className="wrapper">
                {renderItems()}
            </AboutDiv>
        </AboutSection>
    )
}

const AboutSection = styled.div`
    background: #353e4e;
    padding: 60px 0;
`;
const AboutDiv = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
`;
const H5 = styled.h5`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 15px;
`;
const Para = styled.p``;
const Right = styled.div`
    width: 50%;
`;
const Container = styled.div``;
const Img = styled.img``;





