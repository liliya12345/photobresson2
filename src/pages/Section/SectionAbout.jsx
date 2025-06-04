import React, {useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import img from "../../assets/br5.webp"
import  "../Section/section.css"
import AOS from "aos";
import "aos/dist/aos.css";


export  default function SectionAbout(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <Container>
                <Row className="vh-80 d-flex justify-content-center align-items-center p-3">
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center" >
                        <Image data-aos="fade-right" data-aos-delay="20"   src={img} alt={"img"} className="img-fluid box-photo" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center px-1">
                        <div className="box-section">
                            <h4 data-aos="fade-left" data-aos-delay="20" >Biography</h4>
                            <h1 data-aos="fade-left" data-aos-delay="80">Henri Cartier-Bresson</h1>
                            <p data-aos="fade-up" data-aos-delay="50">To take a photograph is to align the head, the eye and the heart. It's a way of life Taken prisoner of war in 1940, he escaped on his third attempt in 1943 and subsequently joined an underground organization to assist prisoners and escapees. In 1945, he photographed the Liberation of Paris with a group of professional journalists, then filmed the documentary Le Retour (The Return).</p>
                            <button data-aos="fade-down" data-aos-delay="50" className="px-5 py-3  my-3 btn-box">Get started</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
)}