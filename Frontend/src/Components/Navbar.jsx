import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#features">Posts</Nav.Link>
                        <Nav.Link href="#features">Followers</Nav.Link>
                        <Nav.Link href="#pricing">Following</Nav.Link>
                        <Nav.Link href="#pricing">Suggestions</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign up</Nav.Link>
                        <Nav.Link href="#deets">Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;