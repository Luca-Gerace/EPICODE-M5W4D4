import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Books arrays
import fantasy from './data/fantasy.json';
import history from './data/history.json';
import romance from './data/romance.json';
import scifi from './data/scifi.json';
// Components
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Context
import Context from './modules/Context';
// Pages
import Home from './pages/Home';
import BookDetails from './pages/BookDetails/BookDetails';
import NotFound from './pages/NotFound';

export default function App() {
  // Hooks
  const [search, setSearch] = useState(''); // Default empty strig
  const [filter, setFilter] = useState('fantasy'); // Default "fantasy"
  const [theme, setTheme] = useState('light'); // Default "light"

  // Handler
  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  // User info
  const user = {
    name: 'Luca',
    surname: 'Gerace',
    email: 'geraceluca91@gmail.com'
  };

  // Context value
  const contextValue = {
    user,
    theme,
    toggleTheme,
  };

  // Switch body class based on active theme
  useEffect(() => {
    document.body.className = ''; // Reset
    document.body.classList.add(`bg-theme-${theme}`);
  }, [theme]);

  // Merge all books arrays
  const books = [...fantasy, ...history, ...romance, ...scifi];
  
  // Filter books based on filter and search
  const filteredBooks = books.filter(book => {
    return (
      // Filter
      (book.category.toLowerCase() === filter.toLowerCase()) &&
      // Search
      (search === '' || (book.title && book.title.toLowerCase().includes(search.toLowerCase())))
    );
  });

  return (
    <BrowserRouter>
      <Context.Provider value={contextValue}>
        <Header search={search} handleSearch={handleSearch} />
        <Container className={`main bg-theme-${theme}`}>
          <Routes>
            <Route path="/" element={<Home books={filteredBooks} search={search} filter={filter} handleFilter={handleFilter} />} />
            <Route path="/book/:asin/" element={<BookDetails books={books} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  )
}