import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import BG from '../../assets/images/tes_bg.jpg';
import Slider from "react-slick";
import Quote from '../../assets/images/te1.png';


export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive : [ 
        {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
        ]
    };

    let renderItems = () => (
        <Div className="wrapper">
            <H3>Testimonial</H3>
            <Slider {...settings}>
                <SlideDiv>
                    <H5>
                        Marc Johnson
                    </H5>
                    <Container><img src={Quote} alt="Quote" /></Container>
                    <Para>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </Para>
                </SlideDiv>
                <SlideDiv>
                    <H5>
                        Marc Zukerberg
                    </H5>
                    <Container><img src={Quote} alt="Quote" /></Container>
                    <Para>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </Para>
                </SlideDiv>
                <SlideDiv>
                    <H5>
                        Mac Du
                    </H5>
                    <Container><img src={Quote} alt="Quote" /></Container>
                    <Para>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </Para>
                </SlideDiv>
                <SlideDiv>
                    <H5>
                        Johnson Johnson
                    </H5>
                    <Container><img src={Quote} alt="Quote" /></Container>
                    <Para>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    </Para>
                </SlideDiv>
            </Slider>
        </Div>
    )
    return (
        <Section>
            {renderItems()}
        </Section>
    )
}
const Section = styled.section`
    background: url(${BG});

`;
const Div = styled.div`
    padding: 50px 0 250px;
`;
const H3 = styled.h3`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
    @media all and (max-width: 480px){
        font-size: 40px;
    }
`;
const SlideDiv = styled.div`
    background: #d75430;
    color: #fff;
    width: 96% !important;
    padding: 40px;
    margin: 0 12px;
    position: relative;
`;
const H5 = styled.h5`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;
const Container = styled.div`
    width: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const Para = styled.p``;
