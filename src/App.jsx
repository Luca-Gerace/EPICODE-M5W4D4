import { useState } from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import fantasy from './data/fantasy.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <Router>
      <Header search={search} handleSearch={handleSearch} />
      <Container>
        <Routes>
          <Route path="/" element={<Home search={search} books={fantasy} />} />
          <Route path="/book/:asin/" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App