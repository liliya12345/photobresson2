import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './navbar.css'

export default function Header(props) {
    return (
<div className="position-relative">
    <Navbar expand="lg" className="nav nav-text text-white position-fixed w-100">
        <Container>
            <Navbar.Brand href="#home" className="text-white" ><h1>Logo</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                color:"white", backgroundColor:"white"
            }} />
            <Navbar.Collapse className="justify-content-end text-white">
                <Nav className="text-white">
                    <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-white" href="#link">Link</Nav.Link>
                    <Nav.Link className="text-white" href="#link">Link</Nav.Link>
                    <Nav.Link className="text-white" href="#link">Link</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</div>










    );
}

