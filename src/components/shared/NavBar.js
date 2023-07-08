import React from "react";

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (<Navbar bg="primary" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href="/"><h4 className="home-title">Cùng Học Thuật Toán</h4></Navbar.Brand>
    </Container>
</Navbar>)
}
export default NavBar;