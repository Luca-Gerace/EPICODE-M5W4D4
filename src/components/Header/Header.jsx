import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBar from './units/SearchBar'
import { Link } from 'react-router-dom';
import Logo from './units/Logo';
import UserTab from './units/UserTab';
import ThemeToggle from './units/ThemeToggle';

function Header({ search, handleSearch }) {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
                        <SearchBar search={search} handleSearch={handleSearch} />
                        <div>
                            <UserTab />
                            <ThemeToggle />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;