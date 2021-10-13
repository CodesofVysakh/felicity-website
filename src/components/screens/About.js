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
            {renderItems()}
        </AboutSection>
    )
}

const AboutSection = styled.div``;
const Left = styled.div``;
const H5 = styled.h5``;
const Para = styled.p``;
const Right = styled.div``;
const Container = styled.div``;
const Img = styled.img``;





