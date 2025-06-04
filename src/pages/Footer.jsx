import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="d-flex justify-content-center align-items-center px-1">
                        <div className="box-section">
                            <h4>Get in touch</h4>
                            <h1>Henri Cartier-Bresson</h1>
                            <p >qwert_ettyu@mail.se</p>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Footer;