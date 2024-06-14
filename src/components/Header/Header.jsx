import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBar from '../SearchBar'
import { Link, NavLink } from 'react-router-dom';
import epiBookLogoDark from '/epibook-logo-dark.png';
// import epiBookLogoLight from '/epibook-logo-light.png';

function Header({ search, handleSearch }) {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={epiBookLogoDark} alt="Epibooks logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <SearchBar search={search} handleSearch={handleSearch} />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;