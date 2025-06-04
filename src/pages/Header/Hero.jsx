import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './navbar.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Hero(props) {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);



    return (
        <>
            <div className="hero nav-text">
                <Container className="d-flex justify-content-center text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="hero-content">
                                <h2 data-aos="fade-right" data-aos-delay="50" >Henri Cartier-Bresson</h2>
                                <h1 data-aos="fade-left" data-aos-delay="50" >Photography</h1>
                                <p  data-aos="fade-up" data-aos-delay="50" > From Marilyn Monroe to Luther King: Portraits of Henri Cartier-Bresson In Porto.  </p>
                                <button data-aos="fade-down" data-aos-delay="50"  className="px-5 py-3 btn-hero" >Get started</button>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </div>


        </>
    )
        ;
}

export default Hero;