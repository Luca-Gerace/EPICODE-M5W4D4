import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SearchBar from './units/SearchBar'
import { Link, useLocation } from 'react-router-dom';
import Logo from './units/Logo';
import UserTab from './units/UserTab';
import Context from '../../modules/Context';
import ThemeToggle from './units/ThemeToggle';

export default function Header({ search, handleSearch }) {

    // Check page location - if location is homepage hide searchbar
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const { theme } = useContext(Context);

    return (
        <header>
            <nav className={`position-fixed w-100 top-0 z-1 py-3 shadow-lg bg-theme-${theme}`}>
                <Container>
                    <Nav className='w-100 d-flex align-items-center justify-content-between'>
                        <Navbar.Brand as={Link} to="/"><Logo /></Navbar.Brand>
                        {isHomePage && (
                            <div className='d-none d-md-block'>
                                <SearchBar search={search} handleSearch={handleSearch} />
                            </div>
                        )}
                        <div className='d-flex'>
                            <UserTab />
                            <ThemeToggle />
                        </div>
                        {isHomePage && (
                            <div className='d-block d-md-none w-100 pt-3'>
                                <SearchBar search={search} handleSearch={handleSearch} />
                            </div>
                        )}
                    </Nav>
                </Container>
            </nav>
        </header>
    );
}