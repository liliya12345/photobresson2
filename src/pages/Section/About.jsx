import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import img from "../../assets/hero.webp";

function About(props) {
    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col lg={6} md={6} sm={12}>
                        <Image src={img} alt={"img"} className="img-fluid box-photo" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center px-5">
                        <div className="box-section">
                            <h4>Biography</h4>
                            <h1>Henri Cartier-Bresson</h1>
                            <p>To take a photograph is to align the head, the eye and the heart. It's a way of life</p>
                            <button className="px-5 py-3 btn-box">Get started</button>
                        </div>
                    </Col>
                </Row>

            </Container>



        </>
    );
}

export default About;