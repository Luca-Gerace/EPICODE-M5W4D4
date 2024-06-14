import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Books arrays
import fantasy from './data/fantasy.json';
import history from './data/history.json';
import romance from './data/romance.json';
import scifi from './data/scifi.json';
// Components
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

export default function App() {
  const [search, setSearch] = useState(''); // Default empty strig
  const [filter, setFilter] = useState('fantasy'); // Default "fantasy"

  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

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
    <Router>
      <Header search={search} handleSearch={handleSearch} />
      <Container className='pt-4 mt-4 h-100'>
        <Routes>
          <Route path="/" element={<Home books={filteredBooks} search={search} filter={filter} handleFilter={handleFilter} />} />
          <Route path="/book/:asin/" element={<BookDetails books={books} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}