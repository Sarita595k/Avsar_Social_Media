import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

import logo from "../assets/logo.png"
const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img
                        alt="logo"
                        src={logo}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    AvsarSocialMedia
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/feed">feed</Nav.Link>
                        <Nav.Link >Followers</Nav.Link>
                        <Nav.Link >Following</Nav.Link>
                        {/* <Nav.Link href="#pricing">Suggestions</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/signup">Sign up</Nav.Link>
                        <Nav.Link as={NavLink} to="/signin">Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;