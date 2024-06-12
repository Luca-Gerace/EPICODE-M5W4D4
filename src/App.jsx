import { useState } from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import BookPage from './pages/Book'
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
      <Routes>
        <Route path="/" element={<Container><Home search={search} books={fantasy} /></Container>} />
        <Route path="/book/:id/" element={<Container><BookPage /></Container>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App