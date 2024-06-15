import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBar from './units/SearchBar'
import { Link } from 'react-router-dom';
import Logo from './units/Logo';
import UserTab from './units/UserTab';
import ThemeToggle from './units/ThemeToggle';

function Header({ search, handleSearch }) {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0 z-1">
                <Container>
                    <Nav className='w-100 d-flex align-items-center justify-content-between'>
                        <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
                        <div className='d-block md-d-none'>
                            <SearchBar search={search} handleSearch={handleSearch} />
                        </div>
                        <div className='d-flex'>
                            <UserTab className='me-2' />
                            <ThemeToggle />
                        </div>
                        <div className='d-none md-d-block'>
                            <SearchBar search={search} handleSearch={handleSearch} />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;