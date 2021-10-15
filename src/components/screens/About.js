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
    padding: 100px 0;
    @media all and (max-width: 640px){
        padding: 80px 0;
    }
    @media all and (max-width: 480px){
        padding: 50px 0;
    }
`;
const AboutDiv = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px){
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    padding-right: 40px;
    @media all and (max-width: 768px){
        width: 100%;
        margin-bottom: 20px;
        padding-right: 0;
    }
`;
const H5 = styled.h5`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 25px;
    @media all and (max-width: 980px){
        font-size: 35px;
    }
`;
const Para = styled.p``;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 768px){
        width: 100%;
    }
    
`;
const Container = styled.div`
    
`;
const Img = styled.img``;





